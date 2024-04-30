//https://stackoverflow.com/questions/8792317/where-is-the-conio-h-header-file-on-linux-why-cant-i-find-conio-h
//sudo apt-get install libncursesw5-dev
//gcc this.c -lncurses

#include <ncurses.h>

int main(){
    initscr();                      /* Start curses mode */        
    raw();                          /* prevents use of signals from ctl + c */
    noecho();                       /* suppress echo */

    mvprintw(10,10,"Hello World!!");        /* Print */
    refresh();                      /* print it on real screen */

    while(true){
            char ch = getch();              /* wait for input */
            if(ch == 'q')
                    break;
            else if(ch == 'h'){
                    mvprintw(10,10,"Test");
            }
            else{
                    attroff(A_BOLD);
            }
    }

    endwin();                       /* end curses mode */
    return 0;
}
