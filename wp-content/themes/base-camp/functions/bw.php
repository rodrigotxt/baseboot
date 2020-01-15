<?php

  // hide Posts for sidebar in wp-admin
  function post_remove () {
    remove_menu_page('edit.php');
  }

  add_action('admin_menu', 'post_remove');
