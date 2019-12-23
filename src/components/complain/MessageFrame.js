import React, { Component } from 'react';
import './chat.css';

class MessageFrame extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className=" card card-chat">
        <h4 className="mt-4 card-title">Tin nhắn </h4>
        <div className="card-body msg_card_body">
          <div className="d-flex justify-content-start mb-4">
            <div className="img_cont_msg">
              <img
                src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                className="rounded-circle user_img_msg"
                alt="alt"
              />
            </div>
            <div className="msg_cotainer">
              Em chào thầy
              <span className="msg_time">8:40 AM, Today</span>
            </div>
          </div>
          <div className="d-flex justify-content-end mb-4">
            <div className="msg_cotainer_send">
              Chào cc
              <span className="msg_time_send">8:55 AM, Today</span>
            </div>
            <div className="img_cont_msg">
              <img
                src="https://res.cloudinary.com/dsqfchskj/image/upload/v1576326328/Tutor/36304048_1026569650827217_7308953294523596800_o_ihegp9.jpg"
                alt="avatar"
                className="rounded-circle user_img_msg"
              />
            </div>
          </div>
          <div className="d-flex justify-content-start mb-4">
            <div className="img_cont_msg">
              <img
                src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                className="rounded-circle user_img_msg"
                alt="alt"
              />
            </div>
            <div className="msg_cotainer">
              Thầy đẹp trai vl
              <span className="msg_time">8:40 AM, Today</span>
            </div>
          </div>
          <div className="d-flex justify-content-end mb-4">
            <div className="msg_cotainer_send">
              Cảm ơn
              <span className="msg_time_send">8:55 AM, Today</span>
            </div>
            <div className="img_cont_msg">
              <img
                src="https://res.cloudinary.com/dsqfchskj/image/upload/v1576326328/Tutor/36304048_1026569650827217_7308953294523596800_o_ihegp9.jpg"
                alt="avatar"
                className="rounded-circle user_img_msg"
              />
            </div>
          </div>
          <div className="d-flex justify-content-start mb-4">
            <div className="img_cont_msg">
              <img
                src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                className="rounded-circle user_img_msg"
                alt="alt"
              />
            </div>
            <div className="msg_cotainer">
              Thầy cho đăng ký môn toán
              <span className="msg_time">8:40 AM, Today</span>
            </div>
          </div>
          <div className="d-flex justify-content-end mb-4">
            <div className="msg_cotainer_send">
              600k/1 giờ
              <span className="msg_time_send">8:55 AM, Today</span>
            </div>
            <div className="img_cont_msg">
              <img
                src="https://res.cloudinary.com/dsqfchskj/image/upload/v1576326328/Tutor/36304048_1026569650827217_7308953294523596800_o_ihegp9.jpg"
                alt="avatar"
                className="rounded-circle user_img_msg"
              />
            </div>
          </div>
          <div className="d-flex justify-content-start mb-4">
            <div className="img_cont_msg">
              <img
                src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                className="rounded-circle user_img_msg"
                alt="alt"
              />
            </div>
            <div className="msg_cotainer">
              Em học 10 tiếng một ngày
              <span className="msg_time">8:40 AM, Today</span>
            </div>
          </div>
          <div className="d-flex justify-content-end mb-4">
            <div className="msg_cotainer_send">
              Hơi ít
              <span className="msg_time_send">8:55 AM, Today</span>
            </div>
            <div className="img_cont_msg">
              <img
                src="https://res.cloudinary.com/dsqfchskj/image/upload/v1576326328/Tutor/36304048_1026569650827217_7308953294523596800_o_ihegp9.jpg"
                alt="avatar"
                className="rounded-circle user_img_msg"
              />
            </div>
          </div>
          <div className="d-flex justify-content-start mb-4">
            <div className="img_cont_msg">
              <img
                src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                className="rounded-circle user_img_msg"
                alt="alt"
              />
            </div>
            <div className="msg_cotainer">
              Em học 10 tiếng một ngày
              <span className="msg_time">8:40 AM, Today</span>
            </div>
          </div>
          <div className="d-flex justify-content-end mb-4">
            <div className="msg_cotainer_send">
              Hơi ít
              <span className="msg_time_send">8:55 AM, Today</span>
            </div>
            <div className="img_cont_msg">
              <img
                src="https://res.cloudinary.com/dsqfchskj/image/upload/v1576326328/Tutor/36304048_1026569650827217_7308953294523596800_o_ihegp9.jpg"
                alt="avatar"
                className="rounded-circle user_img_msg"
              />
            </div>
          </div>
          <div className="d-flex justify-content-start mb-4">
            <div className="img_cont_msg">
              <img
                src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                className="rounded-circle user_img_msg"
                alt="alt"
              />
            </div>
            <div className="msg_cotainer">
              Em học 10 tiếng một ngày
              <span className="msg_time">8:40 AM, Today</span>
            </div>
          </div>
          <div className="d-flex justify-content-end mb-4">
            <div className="msg_cotainer_send">
              Hơi ít
              <span className="msg_time_send">8:55 AM, Today</span>
            </div>
            <div className="img_cont_msg">
              <img
                src="https://res.cloudinary.com/dsqfchskj/image/upload/v1576326328/Tutor/36304048_1026569650827217_7308953294523596800_o_ihegp9.jpg"
                alt="avatar"
                className="rounded-circle user_img_msg"
              />
            </div>
          </div>
          <div className="d-flex justify-content-start mb-4">
            <div className="img_cont_msg">
              <img
                src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                className="rounded-circle user_img_msg"
                alt="alt"
              />
            </div>
            <div className="msg_cotainer">
              Em học 10 tiếng một ngày
              <span className="msg_time">8:40 AM, Today</span>
            </div>
          </div>
          <div className="d-flex justify-content-end mb-4">
            <div className="msg_cotainer_send">
              Hơi ít
              <span className="msg_time_send">8:55 AM, Today</span>
            </div>
            <div className="img_cont_msg">
              <img
                src="https://res.cloudinary.com/dsqfchskj/image/upload/v1576326328/Tutor/36304048_1026569650827217_7308953294523596800_o_ihegp9.jpg"
                alt="avatar"
                className="rounded-circle user_img_msg"
              />
            </div>
          </div>
          <div className="d-flex justify-content-start mb-4">
            <div className="img_cont_msg">
              <img
                src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                className="rounded-circle user_img_msg"
                alt="alt"
              />
            </div>
            <div className="msg_cotainer">
              Em học 10 tiếng một ngày
              <span className="msg_time">8:40 AM, Today</span>
            </div>
          </div>
          <div className="d-flex justify-content-end mb-4">
            <div className="msg_cotainer_send">
              Hơi ít
              <span className="msg_time_send">8:55 AM, Today</span>
            </div>
            <div className="img_cont_msg">
              <img
                src="https://res.cloudinary.com/dsqfchskj/image/upload/v1576326328/Tutor/36304048_1026569650827217_7308953294523596800_o_ihegp9.jpg"
                alt="avatar"
                className="rounded-circle user_img_msg"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MessageFrame;
