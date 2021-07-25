import React, { useState } from 'react';
import swal from 'sweetalert';
// import emailjs from 'emailjs-com';

function Contact() {
  const [comment, setComment] = useState({
    email: '',
    nama: '',
    comment: '',
  });

  function sendToEmail(event) {
    const name = event.target.name;
    const value = event.target.value;
    setComment({
      ...comment,
      [name]: value,
    });
  }

  function submitToEmail(event) {
    event.preventDefault();
    if (!comment.email || !comment.nama || !comment.comment) {
      swal({
        title: 'Somethink wronk',
        text: 'Please insert your comment',
        icon: 'error',
        button: 'Close',
      });
    } else {
      window.emailjs
        .send(
          'service_n0dr84h',
          'template_6fpqen2',
          comment,
          'user_d37jY6lcbhm3Kif9W9LWb',
        )
        .then(
          function (response) {
            swal({
              title: 'Your comment has been sent!',
              text: 'Thank You',
              icon: 'success',
              button: 'Close',
            });
            console.log('SUCCESS!', response.status, response.text);
          },
          function (error) {
            swal({
              title: 'Somethink wronk',
              text: 'Failed to comment',
              icon: 'error',
              button: 'Close',
            });
            console.log('FAILED...', error);
          },
        );
    }
  }

  return (
    <div id="contact">
      <div className="projectHead">
        <div>
          <p>==========================================</p>
        </div>
        <div className="project-judul">
          <h4>Contact</h4>
        </div>
        <div>
          <p>==========================================</p>
        </div>
      </div>
      <div id="detail-contact">
        <div className="detail-contact1">
          <div style={{ width: '300px', height: '300px' }}>
            <p>
              <b>Alamat :</b>
              <br />
              Jl. Kedoya Raya, Kec. Kebon Jeruk, Kel. Kedoya Utara, Green
              Garden, Jakarta Barat
            </p>
            <p>
              <b>Email :</b>
              <br />
              muhammadyustanzah@gmail.com
            </p>
            <p>
              <b>No. Tel :</b>
              <br />
              +62 895 - 6060 - 64773
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=6289595606064773"
              target="_blank"
            >
              <button className="btn btn-dark">Chat Me on Whatsapp</button>
            </a>
          </div>
        </div>
        <div className="detail-contact1">
          <form style={{ width: '400px' }} onSubmit={submitToEmail}>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                name="email"
                onChange={sendToEmail}
                className="form-control"
                placeholder="example@mail.com"
              />
            </div>
            <div className="mb-3">
              <label for="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                name="nama"
                onChange={sendToEmail}
                className="form-control"
                placeholder="sandi e.g."
              />
            </div>
            <div className="mb-3">
              <div className="form-floating">
                <textarea
                  className="form-control"
                  name="comment"
                  onChange={sendToEmail}
                  placeholder="Leave a comment here"
                  style={{ height: '100px' }}
                ></textarea>
                <label for="floatingTextarea2">Comments</label>
              </div>
            </div>
            <button type="submit" className="btn btn-dark">
              Send Me
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
