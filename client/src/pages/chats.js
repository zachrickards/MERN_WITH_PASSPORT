import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { LOADING, SET_USER } from '../store/actions';
import { useStoreContext } from '../store/store';
import { SET_MESSAGES } from '../store/actions';
import { io } from 'socket.io-client';
import API from '../utils/API';
import {Container, Row, Col, ListGroup, Form, Button} from 'react-bootstrap';



const Chats = () => {
  const [state, dispatch] = useStoreContext()
  const socket = useRef();
  const [chatRoomData, setChatRoomData] = useState(null);
  const [currentRoom, setCurrentRoom] = useState(null);
  const [talkingTo, setTalkingTo] = useState('');
  const [msg, setMsg] = useState("");


  const getChatRoomData = async () => {
    try {
      const allMatches = await API.Match.findAllMatches();
      console.log(allMatches.data);

      setChatRoomData(allMatches.data);

    } catch (err) {
      console.log(err);
    }

  }

  useEffect(() => {
    console.log("chats.js useEffect")
    socket.current = io();
    console.log(socket)
    getChatRoomData()
    socket.current.on("connection", () => {
      console.log("user connected")
    });

    socket.current.on("disconnect", () => {
      console.log("user disconnected");
    })

    socket.current.on("serverMsg", (msgObj) => {
      console.log(msgObj);
      dispatch({ type: SET_MESSAGES, message: msgObj })
    })



  }, [])

  useEffect(() => {
    if(!chatRoomData) return;

    const socketRoomNamesArr = chatRoomData.map(val => val.socketRoomName)

    socket.current.emit("joinManyRooms", socketRoomNamesArr, obj => {
      console.log(obj);
    })


  }, [chatRoomData])

  const handleOnClickRoom = (e, obj, displayName) => {
    e.preventDefault();

    setCurrentRoom(obj);
    setTalkingTo(displayName)

    // get all previous messages from database
    // and set them in state

  }

  const handleMsgSubmit = e => {
    e.preventDefault();
    if(!currentRoom || msg.length < 1) return

    console.log(currentRoom ," -- current room")
    const msgObj = {
      userId: state.user._id,
      name: `${state.user.firstName} ${state.user.lastName}`,
      chatRoomName: currentRoom.socketRoomName,
      msg: msg
    }

    dispatch({ type: SET_MESSAGES, message: msgObj })

    socket.current.emit("clientMsg", currentRoom.socketRoomName, msgObj, (obj) => {
      console.log(obj)
    })

    setMsg("");

    // save to database


  }


  return (
    <Container>
      <Row>
        <Col lg="4">
          <ListGroup className="pr-5">
            {chatRoomData && 
              chatRoomData.map((obj,index) => {
                let displayName = obj.users[0].name
                if(obj.users[0].userId === state.user._id) displayName = obj.users[1].name 
                console.log(displayName)
                return(
                  <ListGroup.Item action onClick={e => handleOnClickRoom(e, obj, displayName)}>
                    {displayName}
                  </ListGroup.Item>
                )
              })
            }
          </ListGroup>

        </Col>
        <Col lg="8">
          <Row>
            <ListGroup>
              <ListGroup.Item active>
                {talkingTo}
              </ListGroup.Item>
              {state.currentMessages.reverse().map((msgObj,i) => {
                console.log(msgObj)
                return (
                  <ListGroup.Item className={ i%2===0 ?  "text-primary" : "text-warning"}>
                    {  msgObj.msg}
                  </ListGroup.Item>
                )
              })

              }

            </ListGroup>
          </Row>
          <Row>
            <Form onSubmit={e => handleMsgSubmit(e)}>
              <Form.Group>
                <Form.Control
                  type="text" 
                  placeholder="Send a Message Here" 
                  onChange={e => setMsg(e.target.value)}
                  value={msg}
                  />
              </Form.Group>
              <Button type="submit">
                Send
              </Button>
            </Form>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Chats;