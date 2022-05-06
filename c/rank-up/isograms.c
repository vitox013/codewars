/*

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)

*/

#include <stdbool.h>
#include <string.h>

bool IsIsogram (const char *string){
  int i, j;
  int tam = strlen(string);

  for(i = 0; i < tam - 1; i++){
    for(j = i + 1; j < tam; j++){
        if(tolower(string[i]) == tolower(string[j]))
            return false;
    }
  }
  return true;
}
