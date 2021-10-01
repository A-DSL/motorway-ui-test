import React, { useEffect, useState } from 'react';
import './App.css';
import styles from './App.module.scss';
import Holder from './Components/Holder';

const App = () => {

  //state to hold fetch data
  const [images, setImages] = useState();

  //useEffect with fetch (console.time() is used to measure the time the fetch request takes)
  useEffect(() => {
    console.time("The request was performed in");
    fetch('images?limit=10')
      .then(res => res.json())
      .then(data => {
        console.log('Success:', data);
        setImages(data);
        console.timeEnd("The request was performed in");
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  //salary tracking
  const [salary, setSalary] = useState(20000);
  const updateSalary = (e) => {
    setSalary(e.target.value);
  }

  return (
    <section>
      <div className={styles.formField}>
        <form className={styles.practiceForm}>
          <p>Your name</p>
          <input type="text" name="Name" required />
          <p>Email address</p>
          <input type="text" name="Email" required />
          <p>Date of birth</p> 
          <input type="text" name="DOB" required />
          <p>Favorite colour</p>
          <select name="favcolour">
              <option value="r">Red</option>
              <option value="y">Yellow</option>
              <option value="g">Green</option>
              <option value="b">Blue</option>
              <option value="c">Cyan</option>
          </select> 
          <p>Salary</p>
          <input type="range" name="salary" min="20000" max="80000" onChange={updateSalary}/>
          <span className={styles.practiceForm__salary}>£{salary}</span>
          <p></p>
          <button>Submit</button>
        </form>
      </div>

      <p className={styles.divider}></p>

      <div className={styles.holders}>
        {images && images.map(img => (
          <Holder img={img} key={img.id}/>
        ))}  
      </div>
    </section>
  );
}

export default App;
