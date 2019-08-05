<?php
namespace MatthiasWeb\RealMediaLibrary\usersettings;
use MatthiasWeb\RealMediaLibrary\general;
use MatthiasWeb\RealMediaLibrary\api;

defined( 'ABSPATH' ) or die( 'No script kiddies please!' );

class Demo implements api\IUserSettings {
    
    public function content($content, $user) {
        return '<label>Demo for user #' . $user . '</label>
            <textarea name="demo" type="text" class="regular-text" style="width: 100%;box-sizing: border-box;">Your Text</textarea>
            <p class="description">Data is not saved</p>';
    }
    
    public function save($response, $user, $request) {
        $response["errors"][] = "An error occured with demo text: " . $request->get_param("demo") . ". This is only a demo.";
        return $response;
    }

    public function scripts($assets) {
        // Silence is golden.
    }
}