import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { LOADING, SET_USER } from '../store/actions';
import { useStoreContext } from '../store/store';
import { io } from 'socket.io-client';
import msg from '../../../sockets/chat/msg';



const Chats = () => {
  const socket = useRef();
  const [chatRoomData, setChatRoomData] = useState(null);


  const getChatRoomData = async () => {
    

  }

  useEffect(() => {
    socket.current = io();
    getChatRoomData()
    socket.current.on("connection", () => {
      console.log("user connected")
    });

    socket.current.on("disconnect", () => {
      console.log("user disconnected");
    })

    socket.current.on("serverMsg", (msgObj) => {
      console.log(msgObj);
    })


  }, [])

  useEffect(() => {
    if(!chatRoomData) return;

    let socketRoomNamesArr;

    socket.current.emit("joinManyRooms", socketRoomNamesArr, obj => {
      console.log(obj);
    })


  }, [chatRoomData])



  return (
    <div className="text-center">

    </div>
  );
};

export default Chats;