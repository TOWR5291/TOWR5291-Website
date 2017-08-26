<?php 

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

class CSVparse 
  { 
  var $mappings = array(); 

  function parse_file($filename) 
    { 
    $id = fopen($filename, "r"); //open the file 
    $data = fgetcsv($id, filesize($filename)); /*This will get us the */ 
                                               /*main column names */ 

    if(!$this->mappings) 
       $this->mappings = $data; 

    while($data = fgetcsv($id, filesize($filename))) 
        { 
         if($data[0]) 
           { 
            foreach($data as $key => $value) 
               $converted_data[$this->mappings[$key]] = addslashes($value); 
            $table[] = $converted_data; /* put each line into */ 
             }                                 /* its own entry in    */ 
         }                                     /* the $table array    */ 
    fclose($id); //close file 
    return $table; 
    } 
  } 

$datacsv = new CSVparse;
$data = $datacsv->parse_file("data.csv");


//echo '<pre>';
//print_r($data);
//echo '</pre>';

//echo '<br>'.count($data);
$numitems = count($data);

for ($x = 0; $x < ($numitems); $x++ ) {
    echo '<br>';
    echo $data[$x]['fname'];
    echo '<br>';
    echo $data[$x]['lname'];
    
}


?>