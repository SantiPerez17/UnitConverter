import { useState } from "react"
import { Unit } from "../../types/types"
import { MenuUnits } from "../MenuUnits/MenuUnits"
import { Length } from "../Units/Length";
import { Temperature } from "../Units/Temperature";
import { Weight } from "../Units/Weight";
import { isValidUnit } from "../../utils";
export const MainPage = () =>{
    const [option, setOption] = useState<Unit>(() => {
        const params = new URLSearchParams(window.location.search);
        const unit = params.get("unit");
        return isValidUnit(unit) ? unit : "Length";
      })

    const handleChangeOption = (option:Unit) =>{
        setOption(option)
        const newUrl = new URL(window.location.href);
        newUrl.searchParams.set("unit", option);
        window.history.pushState({}, "", newUrl.toString());
    }

    const MenuUnitsProps = {
        option, handleChangeOption
    }
    const renderContent = () => {
        switch (option) {
          case "Length":
            return <Length />;
          case "Weight":
            return <Weight />;
          case "Temperature":
            return <Temperature />;
          default:
            return <div>Selecciona una unidad</div>;
        }
      };


    return <>
    <MenuUnits  {...MenuUnitsProps} />
    {renderContent()}
    </>
}