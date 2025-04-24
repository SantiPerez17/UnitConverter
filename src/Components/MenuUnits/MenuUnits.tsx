import { Unit } from "../../types/types"
import "./styles.css"


interface MenuUnitsProps {
    option: Unit;
    handleChangeOption: (unit: Unit) => void;
  }

export const MenuUnits = ({option, handleChangeOption}:MenuUnitsProps) =>{
    console.log(option, typeof option)
    const units = ['Length','Weight','Temperature']

   
    return (
        <>
        <div  className="buttonsSection">
            {units.map((unit, index)=>{
                return (
                    <button className={(option==unit) ? "buttonSelected":""}  onClick={()=>handleChangeOption(unit as Unit)} key={index}>{unit}</button>
                )
            })}
        </div>
        </>
        
    )
}