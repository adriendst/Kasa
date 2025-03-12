import './Dropdown.scss'
import dropdownArrow from '../assets/dropdownArrow.png'
import { useState } from 'react';

function Dropdown({ label, items }: { label: string, items: string[] }) {

    const [showContent, setshowContent] = useState<boolean>(false)

    const onHeaderClick = () => {
        setshowContent(!showContent)
    }

    return (
        <div className='dropDown'>
            <div className='dropDownHeader' onClick={onHeaderClick}>
                <span>{label}</span>
                <img src={dropdownArrow} alt="Dropdown Arrow" className={`${showContent ? 'rotateArrow' : ''}`} />
            </div>

            <div className={`dropDownContent ${showContent ? 'showContent' : ""}`}>
                <div className='content'>
                    {items?.map((item: string, index : number) =>
                        <div className="item" key={index}>{item}</div>
                    )}
                </div>
            </div>

        </div>
    );
}

export default Dropdown;