import "./profile-card.css";
import "../../../App.css";
import React from "react";
import PetCard from "../../cards/pet-card/pet-card";
import bgSrc from "../../../assets/bgtop.png";
import CarouselSlider from "../../carousel-slider/carousel-slider";
import ProfileBtn from "../../buttons/profile-btn";
import AddBtn from "../../buttons/add-btn";
import { useNavigate } from 'react-router-dom';
import { AppointmentEntity } from '@domain/types/common/appointment';
import { PetEntity } from '@domain/types/common/pet';

interface ProfileCardProps {
  pets?: PetEntity[];
}

const ProfileCard: React.FC<ProfileCardProps> = ({}) => {

  const navigate = useNavigate();
  const handleAddClick = () => {
    navigate("/add-pet");
  }
  const goToMyAccount = () => {
    navigate("/my-account");
  }



  return (
    <div className="profile">
      <div className="row row1">
        <div className="icons">
          <ProfileBtn onClick={goToMyAccount} />
          <AddBtn onClick={handleAddClick}/>
        </div>
      </div>
      <div className="row pets-slider">
        <CarouselSlider
          args={[
            { name: "John Foo", age: "5 years old", svgSrc: "foo" },
            { name: "John Foo", age: "5 years old", svgSrc: "foo" },
            { name: "John Foo", age: "5 years old", svgSrc: "foo" },
            { name: "John Foo", age: "5 years old", svgSrc: "foo" },
          ]}
          Element={PetCard}
        />
      </div>
      <div className="bg-row row">
        <img alt={"bg"} src={bgSrc}></img>
      </div>
    </div>
  );
};

export default ProfileCard;
