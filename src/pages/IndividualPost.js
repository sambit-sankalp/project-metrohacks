import React from "react";
import "../style/IndividualPost.css";
import Heading from "../components/Heading";

const IndividualPost = () => {
  return (
    <div className="background">
      <div className="IndividualPost">
        <div className="IndividualPostTitle">
          <h1>Beach Cleaning</h1>
        </div>
        <div className="IndividualPostImage">
          <img
            src="https://media.istockphoto.com/vectors/people-cleaaning-up-the-beach-and-removing-trash-vector-id1193475328?k=20&m=1193475328&s=612x612&w=0&h=-Wp-p8zIlh4LmBQRNaJiJVUNZZLTnsdASYGFTd0aYrs="
            alt=""
          />
        </div>
        <div className="IndividualPostDesc">
          <div className="IndividualPostTitle">
            <Heading title="Aims Achieved" />
          </div>
          <div className="IndividualPostList">
            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                cupiditate nihil non labore ipsa repellat. Asperiores sit
                assumenda, illo aliquid praesentium earum maiores voluptates
                quidem explicabo suscipit! Voluptate nisi facilis, temporibus
                perferendis nobis repellat veniam et, at reprehenderit itaque
                rerum.
              </li>
              <li>
                Dicta, asperiores nostrum. Non voluptatum atque autem labore
                earum unde sed, mollitia consequatur nesciunt inventore
                explicabo quasi sequi neque perspiciatis quidem tempora
                molestias incidunt ea est quibusdam enim animi tenetur? Repellat
                esse sint quis voluptatibus voluptatum sapiente ullam eligendi
                iure!
              </li>
              <li>
                Deleniti aut et minima aperiam voluptate expedita laboriosam
                numquam aspernatur beatae similique alias libero fugiat nemo,
                iusto debitis adipisci voluptates aliquid magni veniam nihil ex
                repudiandae cumque possimus! Alias rerum exercitationem dicta
                itaque quisquam accusamus explicabo nihil necessitatibus ratione
                minima!
              </li>
              <li>
                Dicta vel explicabo optio debitis laudantium sequi a amet nemo
                possimus libero quam dolores, atque reiciendis architecto! Ipsa
                eos repellat dignissimos rerum quam omnis maxime laborum aut
                veniam? Velit illo voluptatibus nostrum corporis molestias
                libero earum mollitia ratione illum expedita!
              </li>
              <li>
                Rem velit at, iure animi similique distinctio incidunt, natus
                odio aperiam earum totam maxime doloribus molestias id nulla
                saepe. Fuga officia dolorem dolores inventore libero mollitia
                ipsam veritatis, est error praesentium, corrupti odio reiciendis
                aperiam similique fugit voluptate animi ex!
              </li>
            </ul>
          </div>
        </div>
        <div className="IndividualPostGallery">
          <Heading title="Galleria" />
          <img src="/Frame10.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default IndividualPost;
