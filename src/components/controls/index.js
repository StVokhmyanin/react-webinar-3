import {memo} from "react";
import PropTypes from 'prop-types';
import './style.css';
import useLanguage from "../../store/use-language";
import { addToCartButton } from "../../data/language";

function Controls({onAdd}){

  return (
    <div className='Controls'>
      <button onClick={() => onAdd()}>{useLanguage(addToCartButton)}</button>
    </div>
  )
}

Controls.propTypes = {
  onAdd: PropTypes.func
};

Controls.defaultProps = {
  onAdd: () => {}
}

export default memo(Controls);
