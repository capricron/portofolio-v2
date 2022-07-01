import React from "react";
import '../css/Language.css'
import { Link } from "react-router-dom";

const skills =[
    'CSS','JavaScript','PHP','Python','NodeJS','Laravel','Lumen','React'
]

class Language extends React.Component {
  render() {
    return (
      <div className={"bg-[#1D1F2B] overflow-auto"}>
        <h1 className={"text-center text-3xl mt-[20px] mb-[30px]"}>My Skill</h1>
        {skills.map((item, index) => {
            return (
                <div key={item} className="mt-[10px] flex justify-center text-2xl font-prompt h-[70px]">
                    <Link className={"skill"}key={index} to={"/"+item}>
                        <img src={require('../images/skills/'+item+'.svg')} alt={item} className={"w-[60px] h-[60px]"}/>
                    </Link>
                </div>
            )}
        )}
      </div>
    );
  }
}

export default Language;