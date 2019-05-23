package com.example.myapplication

import android.support.v7.app.AppCompatActivity
import android.os.Bundle



class MainActivity : AppCompatActivity() {
    interface myInterface {
        int a = 1;
        String getData()
        {
            return a.toString();
        }
    }

    class A implements myInterface {

    }
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
    }
}
