import { useState } from "react";
import "./App.css";
import Card from "./card";
function App() {
  let cardData = [
    {
      img: "https://images.indianexpress.com/2023/01/srk-pathaan-meet-1200.jpg?w=640",
      name: "ShahRukh Khan",
      age: 57,
    },
    {
      img: "https://images.indianexpress.com/2021/08/Akshay-Kumar1200by667.jpg",
      name: "Akshay Kumar",
      age: 56,
    },
    {
      img: "https://akm-img-a-in.tosshub.com/sites/cosmo/images/16/17/980x1317/gallery-1461694348-gettyimages-469132163.jpg",
      name: "aaliya bhat",
      age: 30,
    },
    {
      img: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/03/18/662082-arijitsingh-031918.jpg",
      name: "Arijit Singh",
      age: 36,
    },
    {
      img: "https://th.bing.com/th/id/OIP.9nDu9vSFsRwoDmzl0PR8xwHaEr?rs=1&pid=ImgDetMain",
      name: "Guru Randhawa",
      age: 32,
    },
    {
      img: "https://townsquare.media/site/252/files/2012/07/JustinBieber2.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89",
      name: "Justin Bieber",
      age: 29,
    },
    {
      img: "https://www.thestatesman.com/wp-content/uploads/2019/12/Kritisanon.jpg",
      name: "Kriti Sanon",
      age: 33,
    },
  ];
  let date = new Date().toLocaleDateString();
  let [num, setNum] = useState(cardData.length);

  const handleClear = () => {
    setNum(0);
  };

  return (
    <div className="main-div">
      <p>
        <span className="date">{date} </span>
        Today Birthday <span>{num}</span> 😃
      </p>
      {num > 0
        ? cardData.map((data, index) => (
            <Card
              key={index}
              name={data.name}
              age={data.age}
              img={data.img}
            ></Card>
          ))
        : ""}

      <button onClick={handleClear}>Clear</button>
    </div>
  );
}

export default App;
