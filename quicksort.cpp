#include<iostream>
using namespace std;
//hey hello hello...................
void swap(int *a,int *b){
    int temp;
    temp=*a;
    *a=*b;
    *b=temp;
}


int partition(int input[],int si,int en){
    int p=input[si];
    int count=0;
    for (int i=si;i<=en;i++){
        if (p>input[i]){
            count++;
        }
    }
    swap(&input[si],&input[si+count]);
    int i=si,j=en;
    while(i<=j){
        if (input[i]<p){
            i++;
        }
        else if(input[j]>=p){
            j--;
        }
        else{
            swap(&input[i],&input[j]);
        }
    }
    return si+count;

}

void quickSort2(int input[],int si,int en){
    if (si>=en)
        return ;
    int c=partition(input,si,en);
    quickSort2(input,si,c);
    quickSort2(input,c+1,en);
}


void quickSort(int input[],int size){
    quickSort2(input,0,size-1);
}



int main(){
    int n;
    cin >> n;

    int *input = new int[n];

    for(int i = 0; i < n; i++) {
        cin >> input[i];
    }

    quickSort(input, n);
    for(int i = 0; i < n; i++) {
        cout << input[i] << " ";
    }

    delete [] input;

}


