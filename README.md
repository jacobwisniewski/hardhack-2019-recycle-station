# Hardhack 2019 - Recycle Station by Guava

![Team photo](/resources/teamPhoto.jpg)

Placement: 3rd place

Team members: Steven Tran, Joseph Hao, Eddie Yao, Jacob Wisniewski 

## Pitch

![Logo](/resources/RecycleStationv2.png)

A solution to the current recycling infrastructure crisis, involving the creation and spread 
of recycling stations that provide a frontend source of sorting recyclables while promoting 
the stations through a gamified social media intending to make recycling fun and rewarding.

- Earn credits through each recyclable given to a station
- Complete weekly challenges to earn XP to level up
- Use credits on various promotions

## Software

The product consisted of three different platforms: arduino, raspberry pi and the frontend.
The frontend was run of a React framework and a demo is available at [link](https://hardhack-2019.firebaseapp.com).
The arduino consisted of RFID card reading, API GET requests, LED control and servo control. The 
raspberry pi ran a color detection model and determined the recyclability of any objects inside the 
station, it transmitted its finding to the arduino via a web API.
