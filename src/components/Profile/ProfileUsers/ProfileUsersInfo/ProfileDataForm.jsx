import React, {useState} from 'react';
import {Field, reduxForm} from "redux-form";
import { maxLengthCreator, validates } from '../../../../utils/validators/validators';
import { InputForm, TextareaForm } from '../../../common/FormsControls/FormsControls';

const maxLength12 = maxLengthCreator(150);

const ProfileDataForm = (props) => {

    let {profile, goToEditMode} = props;

    let [editMode, setEditMode] = useState(true);

    return (
        <form onSubmit={props.handleSubmit}>  
            <div>
                <span>About Me:</span>
                <div>
                    <Field name={'fullName'} 
                        type={'text'} 
                        placeholder={profile.fullName} 
                        component={InputForm} />
                </div>
                <div>
                    <Field name={'aboutMe'} 
                        type={'text'} 
                        placeholder={profile.aboutMe} 
                        component={TextareaForm} 
                        validate={[validates.required, maxLength12]} />
                </div>
                <div>
                    <span>looking for a job:</span>
                    <Field name={'lookingForAJob'} 
                        type={'checkbox'} 
                        component={InputForm} />
                </div>
                <div>
                    my professional skills:
                    <Field name={'lookingForAJobDescription'} 
                        type={'text'} 
                        placeholder={profile.lookingForAJobDescription && 'professional skills'} 
                        component={TextareaForm} 
                        validate={[validates.required, maxLength12]} />
                </div>
            </div>                    
            <div> 
                <span>Vebsite:</span>
                {
                    Object.keys(profile.contacts).map(key => {
                       return <Contacts key={key} profile={profile} contactTitle={key} contactValue={profile.contacts[key]} />
                    })
                }
            </div>
            <div>
                <button onClick={() => setEditMode(false)}>
                    save
                </button>
            </div>
        </form>
    )
}

const Contacts = ({contactTitle, contactValue}) => {
    return (
        <div>
            {contactTitle}: 
            <span>
                <Field name={contactTitle} 
                    type={'https'} 
                    placeholder={contactValue || 'https://...'} 
                    component={InputForm} />
            </span>
        </div>
    )
}

const ProfileReduxDataForm = reduxForm({
    // a unique name for the form
    form: 'Profile'
  })(ProfileDataForm);


export default ProfileReduxDataForm;