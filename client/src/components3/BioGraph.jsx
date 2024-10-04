import React from "react";
import user1 from "../assets/profile-pictures/user1.jpg";

const BioGraph = ( details ) => {
  console.log(details);
  return (
    <>
      <div>
        <h1 className="font-bold text-3xl">Name</h1>
        <p>Profession</p>
        <img src={user1} alt="" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi quasi,
          cum aliquam vitae reiciendis, quidem sint, at deserunt accusantium
          totam laborum facere maxime eos animi. Debitis magni ea velit
          soluta!LoremLo Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Tempore veritatis tenetur suscipit dicta fuga voluptates ipsam
          dolorem soluta totam possimus expedita sit nisi ab, magni quisquam
          quos unde, architecto perferendis? Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Fugiat commodi minus eveniet
          reprehenderit reiciendis vero impedit quod dicta totam neque natus
          nobis rerum ea corrupti laboriosam a blanditiis, maiores suscipit?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea iure quas
          dolorum vel quod minima at, distinctio quam laborum! Nisi facere ipsa
          similique pariatur, cum esse dolorem eum porro impedit? Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Deleniti quas rem beatae
          id blanditiis, voluptatum ex illo dolorem provident, ipsa cupiditate,
          soluta ea iusto vitae mollitia ipsam? Aut, consequatur minus!
        </p>
      </div>
    </>
  );
};
export default BioGraph;
