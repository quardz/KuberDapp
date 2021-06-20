<?php

  $data = json_encode(_combine_apis(), TRUE);
  print $data;

  function _combine_apis() {
    $output = [
      'games' => _generate_games(),
    ];

    return $output;
  }

  function _generate_games() {
    return [12,3,5,6,7];
  }

?>