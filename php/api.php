<?php

  $data = json_encode(_combine_apis(), TRUE);
  print $data;

  function _combine_apis() {

    $pool_ints = [];
    $pool_ints['int'] = [
      'decimals', 'pool', 'status',
    ];

    $asset_ints = [];
    $asset_ints['int'] = [
      'decimals', 'chainid', 'status',
    ];


    $output = [
      'games' => _generate_games(),
      'prediction' => _get_remote_json('/var/www/kuber/php/oracles.json', $asset_ints),
      'tokens' => _get_remote_json('/var/www/kuber/php/play-tokens.json', $pool_ints),
    ];

    return $output;
  }

  function _generate_games() {
    return [12,3,5,6,7];
  }

  function _get_remote_json($url, $field_changes = NULL) {

    $string = file_get_contents($url);
    $content = json_decode($string, TRUE);

    if($field_changes && $content && is_array($content) && count($content)) {
      if(isset($field_changes['int']) && count($field_changes['int'])) {
        foreach($content as &$item) {
          foreach($item as $key => $value) {
            if(in_array($key, $field_changes['int'])) {
              $item[$key] = intval($value);
            }
          }
        }
      }
    }

    return $content;
    
  }



?>