import Vue from 'vue'

Vue.filter('truncate', function (value, limit) {
  limit = limit || 100;
  if (value.length > limit) {
    // Find next blank space after limit char to avoid cutting words
    let blankIndex =  limit + value.substring(limit).indexOf(" ");
    value = value.substring(0, blankIndex) + "...";
  }

  return value;
});
