/*


written by Ian Haden Team 5291 The Oxford Wildcat Robotics.
Used for the custom beacon board design by 5291
https://easyeda.com/Corban987/Beacon_Board-32e4b5b519214c9399764645c050be15

All the needed parts for version 1, version 2 will be all SMD
Arduino Nano http://www.ebay.com/itm/311623465017?_trksid=p2060353.m2749.l2649&ssPageName=STRK%3AMEBIDX%3AIT
Ws2812 LED http://www.ebay.com/itm/252319870385?_trksid=p2060353.m2749.l2649&var=551161731382&ssPageName=STRK%3AMEBIDX%3AIT
solder for LED https://www.amazon.com/gp/product/B017RSZFQQ/ref=oh_aui_detailpage_o00_s00?ie=UTF8&psc=1   
10k pull up resisters for the buttons http://www.ebay.com/itm/250861938185?_trksid=p2060353.m2749.l2649&ssPageName=STRK%3AMEBIDX%3AIT
Long USB Cable to provide power http://www.ebay.com/itm/391488810316?_trksid=p2060353.m2749.l2649&ssPageName=STRK%3AMEBIDX%3AIT
Phone Charger http://www.ebay.com/itm/272288894476?_trksid=p2060353.m2749.l2649&var=571112814532&ssPageName=STRK%3AMEBIDX%3AIT
Optional dip switchs to select different beacon programs http://www.ebay.com/itm/331595515940?_trksid=p2060353.m2749.l2649&ssPageName=STRK%3AMEBIDX%3AIT

Bought overn from walmart to flow the solder on the LEDS https://www.walmart.com/ip/Mainstays-4-Slice-Toaster-Oven-Black/53986434

LEDS must be rotated 180 degrees, thats an oops on the circuit board design

Inspiration behind the project
- Our AndyMark beacon boards were using so many batteries so we connected them to DC power supplies which killed the boards
we were going to replace the boards and go back to battery power, however we decided to use an Arduino Based board instead
The cost is very similar when buying parts for 8 so we decided to go down this path
We can run from a phone charger using a USB cable and never buy batteries again

We can also have multiple programs selectable via dipswitch so we can run custom colours, or even times as well as multiple official games


*/


#include <Adafruit_NeoPixel.h>         // Include Adafruit NeoPixel library
#define PINLEFT        12              // First LED on digital pin 6
#define PINRIGHT       13              // First LED on digital pin 6
#define NUMLEDS        3               // Use total of 3 LEDs

// Create 'leds' object to drive LEDs
Adafruit_NeoPixel ledLeft  = Adafruit_NeoPixel(NUMLEDS, PINLEFT, NEO_GRB + NEO_KHZ800);
Adafruit_NeoPixel ledRight = Adafruit_NeoPixel(NUMLEDS, PINRIGHT, NEO_GRB + NEO_KHZ800);

const int BeaconLeftButton = 2;                                                    //Digital  In  - Beacon Left Button
const int BeaconRightButton = 3;                                                   //Digital  In  - Beacon Right Button
const int BeaconDipSwitch1 = 5;                                                    //Digital  In  - Beacon Dip Switch 1
const int BeaconDipSwitch2 = 6;                                                    //Digital  In  - Beacon Dip Switch 2
const int BeaconDipSwitch3 = 7;                                                    //Digital  In  - Beacon Dip Switch 3
int intBeaconFlashCount;
int intResQFlashRate = 300;                                                        // how fast the LED flash when changing
int intResQBrightness = 200;                                                       // how Bright the LED is
int intVelocityVortextFlashRate = 300;                                             // how fast the LED flash when changing
int intVelocityVortextBrightness = 180;                                            // how Bright the LED is 180
long timer;
long lngCurrentTime;
long timerReset;
long lngTimerFlash;
boolean dipSwitchesPresent = false;
boolean beaconReset;
boolean RedLeft = false;
boolean BeaconLeftBlue = false;
boolean BeaconRightBlue = false;
boolean BeaconLeftRed = false;
boolean BeaconRightRed = false;
boolean BeaconLeftGreen = false;
boolean BeaconRightGreen = false;
boolean BeaconLeftOff = false;
boolean BeaconRightOff = false;

enum competitionName {
  unknown,
  resQ,
  VelocityVortex
  
};

enum LEDControl {
  BeaconReset,
  ResQBeaconBlueRed,
  ResQBeaconRedBlue,  
  ResQBeaconRedRed,
  ResQBeaconBlueBlue,  
  ResQBeaconBlue,
  ResQBeaconRed,
  VelocityVortexBeaconBlue,
  VelocityVortexBeaconRed
};

//default game, if using dipswitches to change the game change the dipSwitchesPresent flag to true
competitionName competition = VelocityVortex;
LEDControl LEDControlStatus = BeaconReset;

void setup() {
  ledLeft.begin();                        // Initialize Left 'leds' object
  ledRight.begin();                       // Initialize Right 'leds' object
  randomSeed(analogRead(0));              // makes RANDOM numbers more RANDOM. Read a floating Anongue input

  pinMode(BeaconLeftButton, INPUT);
  pinMode(BeaconRightButton, INPUT);
  pinMode(BeaconDipSwitch1, INPUT);
  pinMode(BeaconDipSwitch2, INPUT);
  pinMode(BeaconDipSwitch3, INPUT);

  //Make sure both LEDs are off to demonstrate start of sketch
  startUpSequence();
 
  if (dipSwitchesPresent) {
    if (!BeaconDipSwitch1 && !BeaconDipSwitch2 && !BeaconDipSwitch3)
      competition = resQ;
    else if (!BeaconDipSwitch1 && !BeaconDipSwitch2 && BeaconDipSwitch3)
      competition = VelocityVortex;
  }
  
  switch (competition)
    {
      case resQ:
        resetResQBeacon();
        break;
      case VelocityVortex:
        resetVelocityVortextBeacon();
        break;
    }
  
}

// Loop through changing R, G, and B colors
// Each color fades in from off (i=0) to fully on (i=255)
void loop() {
  
  lngCurrentTime = millis();
  
  switch (competition)
    {
      case resQ:
        //this will run after a reset, the first time a button is pressed  
        if (beaconReset) {
            if (digitalRead(BeaconLeftButton)) {
              if ((BeaconLeftRed && BeaconRightBlue)) {
                LEDControlStatus = ResQBeaconRedBlue;
                timer = lngCurrentTime;
              } else if ((BeaconLeftBlue && BeaconRightRed)) {
                LEDControlStatus = ResQBeaconBlueRed;
                timer = lngCurrentTime;
              }              
            } else if (digitalRead(BeaconRightButton)) {
                if ((BeaconLeftBlue && BeaconRightRed)) {
                  LEDControlStatus = ResQBeaconBlueRed;
                  timer = lngCurrentTime;
                } else if ((BeaconLeftRed && BeaconRightBlue)) {
                  LEDControlStatus = ResQBeaconRedBlue;
                  timer = lngCurrentTime;
                }             
             }
          } else if (lngCurrentTime >= (timer + 5000)) {
            if (((digitalRead(BeaconLeftButton)) || (digitalRead(BeaconRightButton))) && (BeaconLeftBlue && BeaconRightBlue)) {
                LEDControlStatus = ResQBeaconRedRed;
                timer = lngCurrentTime;
                intBeaconFlashCount = 0;
             } else if (((digitalRead(BeaconLeftButton)) || (digitalRead(BeaconRightButton))) && (BeaconLeftRed && BeaconRightRed)) {
                LEDControlStatus = ResQBeaconBlueBlue;
                timer = lngCurrentTime;                
                intBeaconFlashCount = 0;
             }          
          }        
  
        break;
      case VelocityVortex:
        
        //this will run after a reset, the first time a button is pressed  
        if (beaconReset) {
            if (digitalRead(BeaconLeftButton)) {
              if ((BeaconLeftRed && BeaconRightBlue)) {
                LEDControlStatus = VelocityVortexBeaconRed;
                timer = lngCurrentTime;
              } else if ((BeaconLeftBlue && BeaconRightRed)) {
                LEDControlStatus = VelocityVortexBeaconBlue;
                timer = lngCurrentTime;
              }              
            } else if (digitalRead(BeaconRightButton)) {
                if ((BeaconLeftBlue && BeaconRightRed)) {
                  LEDControlStatus = VelocityVortexBeaconRed;
                  timer = lngCurrentTime;
                } else if ((BeaconLeftRed && BeaconRightBlue)) {
                  LEDControlStatus = VelocityVortexBeaconBlue;
                  timer = lngCurrentTime;
                }             
             }
          } else if (lngCurrentTime >= (timer + 5000)) {
            if (((digitalRead(BeaconLeftButton)) || (digitalRead(BeaconRightButton))) && (BeaconLeftBlue && BeaconRightBlue)) {
                LEDControlStatus = VelocityVortexBeaconRed;
                timer = lngCurrentTime;
                intBeaconFlashCount = 0;
             } else if (((digitalRead(BeaconLeftButton)) || (digitalRead(BeaconRightButton))) && (BeaconLeftRed && BeaconRightRed)) {
                LEDControlStatus = VelocityVortexBeaconBlue;
                timer = lngCurrentTime;                
                intBeaconFlashCount = 0;
             }          
          }   
          break;
    }    

    switch (LEDControlStatus)
    {
      case ResQBeaconRedBlue:
        if (intBeaconFlashCount <= 1) {
            setLeftRed(intResQBrightness);
            setRightBlue(intResQBrightness);
            intBeaconFlashCount ++;
        }
      break;
            
      case ResQBeaconBlueRed:
        if (intBeaconFlashCount <= 1) {
            setLeftBlue(intResQBrightness / 2);
            setRightRed(intResQBrightness);
            intBeaconFlashCount ++;
        }
      break;

      case ResQBeaconRedRed:
        if (intBeaconFlashCount <= 1) {
            setLeftRed(intResQBrightness);
            setRightRed(intResQBrightness);
            intBeaconFlashCount ++;
        }
      break;
      
      case ResQBeaconBlueBlue:
        if (intBeaconFlashCount <= 1) {
            setLeftRed(intResQBrightness);
            setRightRed(intResQBrightness);
            intBeaconFlashCount ++;
        }
      break;

      
      case VelocityVortexBeaconBlue:
        if (intBeaconFlashCount <= 2) {
          if (!(BeaconLeftBlue && BeaconRightBlue) && (lngCurrentTime >= (lngTimerFlash + intVelocityVortextFlashRate)  )) {
            lngTimerFlash = lngCurrentTime;
            setLeftBlue(intVelocityVortextBrightness);
            setRightBlue(intVelocityVortextBrightness);
            intBeaconFlashCount ++;
          } else if (!(BeaconLeftOff && BeaconRightOff) && (lngCurrentTime >= (lngTimerFlash + intVelocityVortextFlashRate)  ))  {
            lngTimerFlash = lngCurrentTime;
            setLeftOff();
            setRightOff();
          }
        }
      break;

      case VelocityVortexBeaconRed:
        if (intBeaconFlashCount <= 2) {
          if (!(BeaconLeftRed && BeaconRightRed) && (lngCurrentTime >= (lngTimerFlash +intVelocityVortextFlashRate)  )) {
            lngTimerFlash = lngCurrentTime;
            setLeftRed(intVelocityVortextBrightness);
            setRightRed(intVelocityVortextBrightness);
            intBeaconFlashCount ++;
          } else if (!(BeaconLeftOff && BeaconRightOff) && (lngCurrentTime >= (lngTimerFlash + intVelocityVortextFlashRate)  ))  {
            lngTimerFlash = lngCurrentTime;
            setLeftOff();
            setRightOff();
          }
        }
      break;

    }
      
}


void setLeftOff() {
    ledLeft.setPixelColor(0, ledLeft.Color(0, 0, 0));  
    ledLeft.setPixelColor(1, ledLeft.Color(0, 0, 0));
    ledLeft.setPixelColor(2, ledLeft.Color(0, 0, 0)); 
    ledLeft.show();                        // Set new values
    beaconReset = false;
    BeaconLeftBlue = false;
    BeaconLeftRed = false;
    BeaconLeftGreen = false;
    BeaconLeftOff = true;
}

void setLeftRed(int brightness) {
    ledLeft.setPixelColor(0, ledLeft.Color(brightness, 0, 0));  
    ledLeft.setPixelColor(1, ledLeft.Color(brightness, 0, 0));
    ledLeft.setPixelColor(2, ledLeft.Color(brightness, 0, 0)); 
    ledLeft.show();                        // Set new values
    beaconReset = false;
    BeaconLeftBlue = false;
    BeaconLeftRed = true;
    BeaconLeftGreen = false;
    BeaconLeftOff = false;
}

void setLeftGreen(int brightness) {
    ledLeft.setPixelColor(0, ledLeft.Color(0, brightness, 0)); 
    ledLeft.setPixelColor(1, ledLeft.Color(0, brightness, 0)); 
    ledLeft.setPixelColor(2, ledLeft.Color(0, brightness, 0)); 
    ledLeft.show();                        // Set new values
    beaconReset = false;
    BeaconLeftBlue = false;
    BeaconLeftRed = false;
    BeaconLeftGreen = true;
    BeaconLeftOff = false;
}

void setLeftBlue(int brightness) {
    ledLeft.setPixelColor(0, ledLeft.Color(0, 0, brightness)); 
    ledLeft.setPixelColor(1, ledLeft.Color(0, 0, brightness)); 
    ledLeft.setPixelColor(2, ledLeft.Color(0, 0, brightness)); 
    ledLeft.show();                        // Set new values
    beaconReset = false;
    BeaconLeftBlue = true;
    BeaconLeftRed = false;
    BeaconLeftGreen = false;
    BeaconLeftOff = false;
}

void setRightOff() {
    ledRight.setPixelColor(0, ledRight.Color(0, 0, 0));  
    ledRight.setPixelColor(1, ledRight.Color(0, 0, 0));
    ledRight.setPixelColor(2, ledRight.Color(0, 0, 0)); 
    ledRight.show();                        // Set new values
    beaconReset = false;
    BeaconRightBlue = false;
    BeaconRightRed = false;
    BeaconRightGreen = false;
    BeaconRightOff = true;
}

void setRightRed(int brightness) {
    ledRight.setPixelColor(0, ledRight.Color(brightness, 0, 0));  
    ledRight.setPixelColor(1, ledRight.Color(brightness, 0, 0));
    ledRight.setPixelColor(2, ledRight.Color(brightness, 0, 0)); 
    ledRight.show();                        // Set new values
    beaconReset = false;
    BeaconRightBlue = false;
    BeaconRightRed = true;
    BeaconRightGreen = false;
    BeaconRightOff = false;    
}

void setRightGreen(int brightness) {
    ledRight.setPixelColor(0, ledRight.Color(0, brightness, 0)); 
    ledRight.setPixelColor(1, ledRight.Color(0, brightness, 0)); 
    ledRight.setPixelColor(2, ledRight.Color(0, brightness, 0)); 
    ledRight.show();                        // Set new values
    beaconReset = false;
    BeaconRightBlue = false;
    BeaconRightRed = false;
    BeaconRightGreen = true;
    BeaconRightOff = false;
}

void setRightBlue(int brightness) {
    ledRight.setPixelColor(0, ledRight.Color(0, 0, brightness)); 
    ledRight.setPixelColor(1, ledRight.Color(0, 0, brightness)); 
    ledRight.setPixelColor(2, ledRight.Color(0, 0, brightness)); 
    ledRight.show();                        // Set new values
    beaconReset = false;
    BeaconRightBlue = true;
    BeaconRightRed = false;
    BeaconRightGreen = false;
    BeaconRightOff = false;
}

void resetVelocityVortextBeacon() {
  int randomStart = random(100);

  if ((randomStart % 2) != 0) {
    setLeftRed(intVelocityVortextBrightness);
    setRightOff();
    delay(intVelocityVortextFlashRate);
    setLeftOff();
    setRightBlue(intVelocityVortextBrightness);
    delay(intVelocityVortextFlashRate);
    setLeftRed(intVelocityVortextBrightness);
    setRightOff();
    delay(intVelocityVortextFlashRate);
    setLeftOff();
    setRightBlue(intVelocityVortextBrightness);
    delay(intVelocityVortextFlashRate);
    setLeftRed(intVelocityVortextBrightness);
    setRightOff();
    delay(intVelocityVortextFlashRate);
    setLeftOff();
    setRightBlue(intVelocityVortextBrightness);
    delay(intVelocityVortextFlashRate);
    setLeftRed(intVelocityVortextBrightness);
    setRightOff();
    delay(intVelocityVortextFlashRate);
    setLeftOff();
    setRightBlue(intVelocityVortextBrightness);
    delay(intVelocityVortextFlashRate);
    setLeftRed(intVelocityVortextBrightness);
    setRightOff();
    delay(intVelocityVortextFlashRate);
    setLeftRed(intVelocityVortextBrightness);
    setRightBlue(intVelocityVortextBrightness);
  } else {
    setRightRed(intVelocityVortextBrightness);
    setLeftOff();
    delay(intVelocityVortextFlashRate);
    setRightOff();
    setLeftBlue(intVelocityVortextBrightness);
    delay(intVelocityVortextFlashRate);
    setRightRed(intVelocityVortextBrightness);
    setLeftOff();
    delay(intVelocityVortextFlashRate);
    setRightOff();
    setLeftBlue(intVelocityVortextBrightness);
    delay(intVelocityVortextFlashRate);
    setRightRed(intVelocityVortextBrightness);
    setLeftOff();
    delay(intVelocityVortextFlashRate);
    setRightOff();
    setLeftBlue(intVelocityVortextBrightness);
    delay(intVelocityVortextFlashRate);
    setRightRed(intVelocityVortextBrightness);
    setLeftOff();
    delay(intVelocityVortextFlashRate);
    setRightOff();
    setLeftBlue(intVelocityVortextBrightness);
    delay(intVelocityVortextFlashRate);
    setRightRed(intVelocityVortextBrightness);
    setLeftOff();
    delay(intVelocityVortextFlashRate);
    setRightRed(intVelocityVortextBrightness);
    setLeftBlue(intVelocityVortextBrightness);   
  }
  timer = millis();
  beaconReset = true;
  LEDControlStatus = BeaconReset;
}

void resetResQBeacon() {
  int randomStart = random(100);

  if ((randomStart % 2) != 0) {
    setLeftRed(intResQBrightness / 2);
    setRightOff();
    delay(intVelocityVortextFlashRate);
    setLeftOff();
    setRightBlue(intResQBrightness / 2);
    delay(intVelocityVortextFlashRate);
    setLeftRed(intResQBrightness / 2);
    setRightOff();
    delay(intVelocityVortextFlashRate);
    setLeftOff();
    setRightBlue(intResQBrightness / 2);
    delay(intVelocityVortextFlashRate);
    setLeftRed(intResQBrightness / 2);
    setRightOff();
    delay(intVelocityVortextFlashRate);
    setLeftOff();
    setRightBlue(intResQBrightness / 2);
    delay(intVelocityVortextFlashRate);
    setLeftRed(intResQBrightness / 2);
    setRightOff();
    delay(intVelocityVortextFlashRate);
    setLeftOff();
    setRightBlue(intResQBrightness / 2);
    delay(intVelocityVortextFlashRate);
    setLeftRed(intResQBrightness / 2);
    setRightOff();
    delay(intVelocityVortextFlashRate);
    setLeftRed(intResQBrightness / 2);
    setRightBlue(intResQBrightness / 2);
  } else {
    setRightRed(intResQBrightness / 2);
    setLeftOff();
    delay(intVelocityVortextFlashRate);
    setRightOff();
    setLeftBlue(intResQBrightness / 2);
    delay(intVelocityVortextFlashRate);
    setRightRed(intResQBrightness / 2);
    setLeftOff();
    delay(intVelocityVortextFlashRate);
    setRightOff();
    setLeftBlue(intResQBrightness / 2);
    delay(intVelocityVortextFlashRate);
    setRightRed(intResQBrightness / 2);
    setLeftOff();
    delay(intVelocityVortextFlashRate);
    setRightOff();
    setLeftBlue(intResQBrightness / 2);
    delay(intVelocityVortextFlashRate);
    setRightRed(intResQBrightness / 2);
    setLeftOff();
    delay(intVelocityVortextFlashRate);
    setRightOff();
    setLeftBlue(intResQBrightness / 2);
    delay(intVelocityVortextFlashRate);
    setRightRed(intResQBrightness / 2);
    setLeftOff();
    delay(intVelocityVortextFlashRate);
    setRightRed(intResQBrightness / 2);
    setLeftBlue(intResQBrightness / 2);   
  }
  timer = millis();
  beaconReset = true;
  LEDControlStatus = BeaconReset;
}

void startUpSequence ()
{
  setLeftOff();
  setRightOff();
  ledRight.setPixelColor(0, ledRight.Color(255, 255, 255));  
  ledLeft.setPixelColor(0, ledLeft.Color(255, 255, 255));  
  ledRight.show();                        // Set new values
  ledLeft.show();                        // Set new values
  delay(100);
  ledRight.setPixelColor(1, ledRight.Color(255, 255, 255));  
  ledLeft.setPixelColor(1, ledLeft.Color(255, 255, 255));  
  ledRight.show();                        // Set new values
  ledLeft.show();                        // Set new values
  delay(100);
  ledRight.setPixelColor(2, ledRight.Color(255, 255, 255));  
  ledLeft.setPixelColor(2, ledLeft.Color(255, 255, 255));  
  ledRight.show();                        // Set new values
  ledLeft.show();                        // Set new values
  delay(100);
  ledRight.setPixelColor(0, ledRight.Color(0, 255, 0));  
  ledLeft.setPixelColor(0, ledLeft.Color(0, 255, 0));  
  ledRight.show();                        // Set new values
  ledLeft.show();                        // Set new values
  delay(100);
  ledRight.setPixelColor(1, ledRight.Color(0, 255, 0));
  ledLeft.setPixelColor(1, ledLeft.Color(0, 255, 0));
  ledRight.show();                        // Set new values
  ledLeft.show();                        // Set new values
  delay(100);
  ledRight.setPixelColor(2, ledRight.Color(0, 255, 0));
  ledLeft.setPixelColor(2, ledLeft.Color(0, 255, 0));  
  ledRight.show();                        // Set new values
  ledLeft.show();                        // Set new values
  delay(100);
  ledRight.setPixelColor(0, ledRight.Color(255, 0, 0));  
  ledLeft.setPixelColor(0, ledLeft.Color(255, 0, 0));  
  ledRight.show();                        // Set new values
  ledLeft.show();                        // Set new values
  delay(100);
  ledRight.setPixelColor(1, ledRight.Color(255, 0, 0));  
  ledLeft.setPixelColor(1, ledLeft.Color(255, 0, 0));  
  ledRight.show();                        // Set new values
  ledLeft.show();                        // Set new values
  delay(100);
  ledRight.setPixelColor(2, ledRight.Color(255, 0, 0));  
  ledLeft.setPixelColor(2, ledLeft.Color(255, 0, 0));  
  ledRight.show();                        // Set new values
  ledLeft.show();                        // Set new values
  delay(100);  
  ledRight.setPixelColor(0, ledRight.Color(0, 0, 255));  
  ledLeft.setPixelColor(0, ledLeft.Color(0, 0, 255));  
  ledRight.show();                        // Set new values
  ledLeft.show();                        // Set new values
  delay(100);
  ledRight.setPixelColor(1, ledRight.Color(0, 0, 255));  
  ledLeft.setPixelColor(1, ledLeft.Color(0, 0, 255));  
  ledRight.show();                        // Set new values
  ledLeft.show();                        // Set new values
  delay(100);
  ledRight.setPixelColor(2, ledRight.Color(0, 0, 255));  
  ledLeft.setPixelColor(2, ledLeft.Color(0, 0, 255));  
  ledRight.show();                        // Set new values
  ledLeft.show();                        // Set new values
  delay(100);
  setLeftRed(200);
  setRightRed(200);
  delay(200);
  setLeftBlue(200);
  setRightBlue(200);
  delay(200);
  setLeftOff();
  setRightOff();
}




