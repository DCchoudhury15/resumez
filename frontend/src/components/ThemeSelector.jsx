import React, { useEffect, useRef, useState } from 'react';
import { DUMMY_RESUME_DATA, resumeTemplates } from '../utils/data';
import Tabs from './Tabs';
import { Check } from 'lucide-react';
import { TemplateCard } from './Cards';
import RenderResume from './RenderResume';
const TAB_DATA=[{label:'Templates'}]
const ThemeSelector = ({selectedTheme, setSelectedTheme, resumeData, onClose}) => {
    const resumeRef=useRef(null)
    const [baseWidth, setBaseWidth]=useState(800);

    const initialIndex=resumeTemplates.findIndex(t=>t.id===selectedTheme)
    const [selectedTemplate, setSelectedTemplate]=useState({
        theme:selectedTheme || resumeTemplates[0]?.id || "",
        index: initialIndex>=0 ? initialIndex:0
    })
    const [tabValue, setTabValue]=useState('Templates')
    const handleThemeSelection=()=>{
        setSelectedTheme(selectedTemplate.theme)
        onClose()

    }
    const updateBaseWidth=()=>{
        if(resumeRef.current){
            setBaseWidth(resumeRef.current.offsetWidth)
        }
    }
    useEffect(()=>{
        updateBaseWidth()
        window.addEventListener("resize", updateBaseWidth)
        return()=>{
            window.removeEventListener("resize", updateBaseWidth)
        }
    },[])
    return (
        <div className='max-w-7xl mx-auto px-4'>
            <div className='flex flex-col sm:flex-row items-start  sm:items-center justify-between gap-4 mb-8 p-4 sm:p-6 bg-gradient-to-r from-white to-violet-50 rounded-2xl border border-violet-100'>
                <Tabs tabs={TAB_DATA}activeTab={tabValue} setActiveTab={setTabValue}/>
                <button
  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3
    bg-gradient-to-r from-violet-600 to-fuchsia-600
    text-white font-bold rounded-2xl border border-violet-200
    shadow-lg hover:shadow-2xl hover:scale-105 hover:brightness-110
    focus:outline-none focus:ring-2 focus:ring-fuchsia-400 transition-all duration-150"
  onClick={handleThemeSelection}
>
  <Check size={18} className="mr-1" />
  Apply Changes
</button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-start">
  <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 p-4 sm:p-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[60vh] lg:max-h-[70vh] overflow-auto p-2">
      {resumeTemplates.map((template, index) => (
        <TemplateCard
          key={`templates_${index}`}
          thumbnailImg={template.thumbnailImg}
          isSelected={selectedTemplate.index === index}
          onSelect={() =>
            setSelectedTemplate({
              theme: template.id,
              index,
            })
          }
        />
      ))}
    </div>
  </div>
  <div
    className="lg:col-span-3 bg-gradient-to-br from-white via-violet-50 to-fuchsia-50 rounded-3xl border border-violet-100 shadow-xl p-4 sm:p-8 flex items-center justify-center min-h-[400px]"
    ref={resumeRef}
      style={{ minWidth: 350, maxWidth: 700, width: "100%" }}
  >
    <RenderResume
      templateId={selectedTemplate?.theme || ""}
      resumeData={resumeData || DUMMY_RESUME_DATA}
      containerWidth={baseWidth < 350 ? 350 : baseWidth > 700 ? 700 : baseWidth}
    />
  </div>
</div>
        </div>
    );
};

export default ThemeSelector;