import React, { useState } from "react";
import "./App.css"
const App = () => {
    // let photo = ""
    let photoTimer = new Date()
    photoTimer = photoTimer.getSeconds();
    // const time = ["./images/1.jpg","./images/2.jpg","./images/3.jpg","./images/4.jpg","./images/5.jpg","./images/6.jpg","./images/7.jpg","./images/1.jpg","./images/2.jpg","./images/3.jpg","./images/4.jpg","./images/5.jpg","./images/6.jpg","./images/7.jpg","./images/1.jpg","./images/2.jpg","./images/3.jpg","./images/4.jpg","./images/5.jpg","./images/6.jpg","./images/7.jpg","./images/1.jpg","./images/2.jpg","./images/3.jpg","./images/4.jpg","./images/5.jpg","./images/6.jpg","./images/7.jpg","./images/1.jpg","./images/2.jpg","./images/3.jpg","./images/4.jpg","./images/5.jpg","./images/6.jpg","./images/7.jpg","./images/1.jpg","./images/2.jpg","./images/3.jpg","./images/4.jpg","./images/5.jpg","./images/6.jpg","./images/7.jpg","./images/1.jpg","./images/2.jpg","./images/3.jpg","./images/4.jpg","./images/5.jpg","./images/6.jpg","./images/7.jpg","./images/1.jpg","./images/2.jpg","./images/3.jpg","./images/4.jpg","./images/5.jpg","./images/6.jpg","./images/7.jpg","./images/1.jpg","./images/2.jpg","./images/3.jpg","./images/4.jpg"];
    let pTimer = new Date()
    // pTimer = time[pTimer.getSeconds()];

    // if (photoTimer <= 1 && photoTimer >= 0) {
    //     photo = "./images/1.jpg"
    // }
    // else if (photoTimer <= 5 && photoTimer >= 2) {
    //     photo = "./images/2.jpg"
    // }
    // else if (photoTimer <= 10 && photoTimer >= 6) {
    //     photo = "./images/3.jpg"
    // }
    // else if (photoTimer <= 15 && photoTimer >= 11) {
    //     photo = "./images/4.jpg"
    // }
    // else if (photoTimer <= 20 && photoTimer >= 16) {
    //     photo = "./images/5.jpg"
    // }
    // else if (photoTimer <= 25 && photoTimer >= 21) {
    //     photo = "./images/6.jpg"
    // }
    // else if (photoTimer <= 30 && photoTimer >= 26) {
    //     photo = "./images/7.jpg"
    // }
    // else if (photoTimer <= 35 && photoTimer >= 31) {
    //     photo = "./images/3.jpg"
    // }
    // else if (photoTimer <= 45 && photoTimer >= 41) {
    //     photo = "./images/1.jpg"
    // }
    // else if (photoTimer <= 40 && photoTimer >= 36) {
    //     photo = "./images/2.jpg"
    // }
    // else if (photoTimer <= 55 && photoTimer >= 50) {
    //     photo = "./images/5.jpg"
    // }


    // -----------
    let [currentPhotoTimer, setPhotoTimer] = useState(photoTimer)
    const updateTimer = () => {
        photoTimer = new Date().getSeconds();
        setPhotoTimer(photoTimer)
    }
    setInterval(updateTimer, 39000)

    let [uPhoto, setPhoto] = useState("./images/3.jpg")
    const updatePhoto = () => {
        const time = ["./images/7.jpg","./images/2.jpg","./images/3.jpg","./images/4.jpg","./images/5.jpg","./images/6.jpg","./images/7.jpg","./images/1.jpg","./images/2.jpg","./images/3.jpg","./images/4.jpg","./images/5.jpg","./images/6.jpg","./images/7.jpg","./images/1.jpg","./images/2.jpg","./images/3.jpg","./images/4.jpg","./images/5.jpg","./images/6.jpg","./images/7.jpg","./images/1.jpg","./images/2.jpg","./images/3.jpg","./images/4.jpg","./images/5.jpg","./images/6.jpg","./images/7.jpg","./images/1.jpg","./images/2.jpg","./images/3.jpg","./images/4.jpg","./images/5.jpg","./images/6.jpg","./images/7.jpg","./images/1.jpg","./images/2.jpg","./images/3.jpg","./images/4.jpg","./images/5.jpg","./images/6.jpg","./images/7.jpg","./images/1.jpg","./images/2.jpg","./images/3.jpg","./images/4.jpg","./images/5.jpg","./images/6.jpg","./images/7.jpg","./images/1.jpg","./images/2.jpg","./images/3.jpg","./images/4.jpg","./images/5.jpg","./images/6.jpg","./images/7.jpg","./images/1.jpg","./images/2.jpg","./images/3.jpg","./images/4.jpg"];
        // let pTimer = new Date()
        pTimer = time[pTimer.getSeconds()];
        setPhoto(pTimer)
    }
    setInterval(updatePhoto, 39000)
    return (

        <div>
            <img id="image" src={uPhoto} alt=''></img>
            <h1 className="hidden">{currentPhotoTimer}</h1>
        </div>

    )

}
export default App;