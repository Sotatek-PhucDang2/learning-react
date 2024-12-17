import React from "react";
import '../css/Button.css';


const Button=()=>{
return(

    <div class="button">
    <div class="row">
        <button class="btn_so" onclick="">7</button>
        <button class="btn_so" onclick="">8</button>
        <button class="btn_so" onclick="">9</button>
        <button class="btn_del" onclick="">DEL</button>
    </div>
    <div class="row">
        <button class="btn_so" onclick="">4</button>
        <button class="btn_so" onclick="">5</button>
        <button class="btn_so" onclick="">6</button>
        <button class="btn_tinh" onclick="">+</button>
    </div>
    <div class="row">
        <button class="btn_so" onclick="">1</button>
        <button class="btn_so" onclick="">2</button>
        <button class="btn_so" onclick="">3</button>
        <button class="btn_tinh" onclick="">-</button>
    </div>
    <div class="row">
        <button class="btn_so" onclick="">.</button>
        <button class="btn_so" onclick="">0</button>
        <button class="btn_so" onclick="">/</button>
        <button class="btn_tinh" onclick="">x</button>
    </div>
    <div class="row">
        <button class="btn_reset" onclick="">reset</button>
        <button class="btn_KQ" onclick="">=</button>
    </div>
    </div>
)
}
export default Button;