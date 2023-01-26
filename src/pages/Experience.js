import React from 'react';
import { 
  VerticalTimeline, 
  VerticalTimelineElement 
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement className='vertical-timeline-element--education' date='2017 - 2021'
        iconStyle={{background: '#3e497a', color: '#ffff'}}
        icon={<SchoolIcon/>}
      >
        <h3 className='vertical-timeline-element-title'>Universitas Negeri Semarang</h3>
        <h4 className="vertical-timeline-element-subtitle">Bachelor's Degree</h4>
        <p>Chemical Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education' date='July - September 2019'
        iconStyle={{background: '#e9d35b', color: '#ffff'}}
        icon={<WorkIcon/>}
      >
        <h3 className='vertical-timeline-element-title'>Indonesian Institute of Science</h3>
        <h4 className="vertical-timeline-element-subtitle">South Tangerang, Indonesia</h4>
        <p>Engineer Intern</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education' date='January - February 2020'
        iconStyle={{background: '#e9d35b', color: '#ffff'}}
        icon={<WorkIcon/>}
      >
        <h3 className='vertical-timeline-element-title'>Indocement HeidelbergCement Group</h3>
        <h4 className="vertical-timeline-element-subtitle">Bogor, Indonesia</h4>
        <p>Process Engineer Intern</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education' date='January 2022 - present'
        iconStyle={{background: '#e9d35b', color: '#ffff'}}
        icon={<WorkIcon/>}
      >
        <h3 className='vertical-timeline-element-title'>MAS Silueta</h3>
        <h4 className="vertical-timeline-element-subtitle">Semarang, Indonesia</h4>
        <p>Assistant of Environmental Sustainability</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience