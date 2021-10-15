 import PropTypes from 'prop-types';
import contacts from './contacts.json';
import s from './Asaid.module.css';
import tech from './techSkills.json';
import soft from './softSkill.json';


const techSkill = tech;
console.log(techSkill)
 export default  function Asaid(props) {
    const {
    // url,
    phone,
    email,
    phoneTel,
 
    } = contacts;
     console.log(tech)
      


    return (
        <aside>
             {/* <img src={url} alt="photo auto" width="100%"  className={s.contacts__img}/>  */}
            <div className="contacts__section">
           
            
            <h3>Contacts</h3>
           
            <ul className={s.contacts__list}>
                <li className={s.contacts__item} >
                    <p>C: <a href={phoneTel} >{phone}</a></p>
                </li>
                <li className={s.contacts__item} >
                    <p>E: <a href={email}>{email}</a></p>
                </li>
            </ul>
           
            </div>
            <div className="techSkills">
                <h3>Tech Skills</h3>
                <ul>
                    {tech.map(el => (<li className={s.techSkills__item} key={el.id }>{el.name}</li>
                        )
                     ) }
                </ul>
              
            </div>
            <div className="softSkills">
                <h3>Soft Skills</h3>
                     <ul>
                    {soft.map(el => (<li className={s.techSkills__item} key={el.id }>{el.name}</li>
                        )
                     ) }
                </ul>
            </div>
        </aside>
    

    )
}




 Asaid.propTypes = {
 
  phone: PropTypes.string,
  email: PropTypes.string,
 
};

