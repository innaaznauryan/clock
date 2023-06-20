import React from "react"
import "./clock.css"

export default class Clock extends React.Component {
    state = {
      time: new Date(),
      deltaHour: "",
      deltaMinute: ""
    }

    handleSubmit = (e) => {
      e.preventDefault()
      const {hour, minute} = e.target
      this.setState({
        deltaHour: +hour.value - new Date().getHours(),
        deltaMinute: +minute.value - new Date().getMinutes()
      }, () => console.log(this.state))
    }
  
    setTime = () => this.setState({time: new Date()})

    clockCreated = false

    render() {
      if(!this.clockCreated) {
        setInterval(this.setTime, 1000)
        this.clockCreated = true
      }

      const {time, deltaHour, deltaMinute} = this.state

      return( 
      <>
        <div className="clock">
            <div style={{transform: `rotate(${(deltaHour + time.getHours()) * 30}deg)`}} id="hour"></div>
            <div style={{transform: `rotate(${(deltaMinute + time.getMinutes()) * 6}deg)`}} id="minute"></div>
            <div style={{transform: `rotate(${time.getSeconds() * 6}deg)`}} id="second"></div>
            <span id="twelve">12</span>
            <span id="three">3</span>
            <span id="six">6</span>
            <span id="nine">9</span>
        </div>
        <form onSubmit={this.handleSubmit}>
            <input max="23" min="0" placeholder="00" type="number" name="hour"/>
            <input max="59" min="0" placeholder="00" type="number" name="minute"/>
            <input type="submit" value="SET" id="submit"/>
        </form>
      </>
      )
    }
}