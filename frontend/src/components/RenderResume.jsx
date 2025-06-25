import React from 'react';
import TemplateOne from './TemplateOne';
import TemplateTwo from './TemplateTwo';
import TemplateThree from './TemplateThree';

const RenderResume = ({
    templateId,
    resumeData,
    constainerWidth,
})=>{
    switch(templateId){
        case "01":
        return (
            <TemplateOne resumeData={resumeData} containerWidth={constainerWidth}/>
        )
        case "02":
        return(
            <TemplateTwo resumeData={resumeData} containerWidth={constainerWidth}/>
        )
        case"03":
        return(
            <TemplateThree resumeData={resumeData} constainerWidth={constainerWidth}/>
        
        )
        default:
            return(
                <TemplateOne resumeData={resumeData} containerWidth={constainerWidth}/>
            )
    }
}
    

export default RenderResume;