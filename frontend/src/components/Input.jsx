import React, { useState } from 'react';
import { inputStyles } from '../assets/dummystyle';
import {Eye,  EyeOff } from 'lucide-react';
export const Input = ({ value, onChange, label, placeholder, type='text'}) => {
    const [showPassword, setShowPassword]=useState(false)
    const[isFocused, setIsFocused]=useState(false)
    const styles =inputStyles;
    return (
      <div className={styles.wrapper}>
          {label && <label className={styles.label}>{label}</label>}
          <div className={styles.inputContainer(isFocused)}>
                  <input type={type==='password'? (showPassword? 'text':'password'):type}
                  placeholder={placeholder}
                  className={styles.inputField}
                  value={value}
                  onChange={onChange}
                  onFocus={()=>setIsFocused(true)}
                  onBlur={()=>setIsFocused(false)}
                  />
                  {type ==='password' && (
                    <button
  type="button"
  className={styles.togglePasswordButton}
  onClick={() => setShowPassword((prev) => !prev)}
  tabIndex={-1}
>
  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />} 
</button>
                  )}
          </div>
      </div>
    );
};

export default Input;