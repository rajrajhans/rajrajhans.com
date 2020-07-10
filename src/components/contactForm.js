import React, { Component } from "react"

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      email:'',
      subject:'',
      message:'',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({
      [e.target.name]:e.target.value,
    })
  }

  async handleSubmit(e){
    e.preventDefault();

    const {name, email, subject, message} = this.state;
    const to_send = {
      name: name,
      email: email,
      subject : subject,
      message : message
    }

    try{
      const response = await fetch("/.netlify/functions/sendmail", {
        method: "POST",
        body: JSON.stringify(to_send),
      } )

      if (!response.ok){
        return
      }
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name</label>
        <input name={"name"} type={"text"} value={this.state.name} onChange={this.handleChange}/>

        <label>Email</label>
        <input name={"email"} type={"email"} value={this.state.email} onChange={this.handleChange}/>

        <label>Subject</label>
        <input name={"subject"} type={"text"} value={this.state.subject} onChange={this.handleChange}/>

        <label>Message</label>
        <textarea name={"message"} value={this.state.message} onChange={this.handleChange}/>
l
        <input type={"submit"} value={"Submit"}/>
      </form>
    )
  }
}

export default ContactForm