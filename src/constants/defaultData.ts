//= Types
import { GeneralSettings, IExperience, ISkill, IWork, ICertificate, ITestimonial, StackType, Importance, SkillMastery } from '@/types';

interface DataType {
  aboutInfo: GeneralSettings;
  experiences: IExperience[];
  skills: ISkill[];
  works: IWork[];
  certificates: ICertificate[];
  testimonials: ITestimonial[];
}


export const defaultData: DataType = {
  "aboutInfo": {
    "header": {
      "jobTitle": "Frontend developer",
      "descriptionText": "Hi, I'm hassan ali frontend developer from Egypt",
      "pictureUrl": "/images/picture.png"
    },
    "intro": {
      "experienceYears": 2,
      "jobTitle": "Frontend developer",
      "aboutMe": "Hi, I'm hassan ali frontend developer from Egypt"
    },
    "links": {
      "emailAddress": "7assan.3li1998@gmail.com",
      "phoneNumber": "01146321817",
      "github": "Hassan-98",
      "linkedin": "/in/hassan-1998",
      "twitter": "/aeae9992"
    },
    "recentStack": [
      {
        "stack": {
          "_id": "1",
          "name": "html",
          "image": "/images/picture.png",
          "type": StackType.front,
          "isNotCompitable": false
        },
        "order": 1
      },
      {
        "stack": {
          "_id": "2",
          "name": "css",
          "image": "/images/picture.png",
          "type": StackType.front,
          "isNotCompitable": false
        },
        "order": 2
      },
      {
        "stack": {
          "_id": "3",
          "name": "javascript",
          "image": "/images/picture.png",
          "type": StackType.front,
          "isNotCompitable": false
        },
        "order": 3
      },
      {
        "stack": {
          "_id": "4",
          "name": "typescript",
          "image": "/images/picture.png",
          "type": StackType.front,
          "isNotCompitable": false
        },
        "order": 4
      }
    ]
  },
  "experiences": [
    {
      "_id": "1",
      "title": "frontend developer",
      "company": "Company One",
      "companyLink": "https://hassanali.tk/company1",
      "startedAt": new Date('11-5-2023'),
      "endedAt": new Date('12-5-2023'),
      "description": "worked for 2 years",
      "showInCv": true
    },
    {
      "_id": "2",
      "title": "backend developer",
      "company": "Company Two",
      "companyLink": "https://hassanali.tk/company2",
      "startedAt": new Date('11-5-2023'),
      "endedAt": new Date('12-5-2023'),
      "description": "worked for 2 years",
      "showInCv": true
    },
    {
      "_id": "3",
      "title": "mern stack developer",
      "company": "Company Three",
      "companyLink": "https://hassanali.tk/company3",
      "startedAt": new Date('11-5-2023'),
      "endedAt": new Date('12-5-2023'),
      "description": "worked for 2 years",
      "showInCv": true
    }
  ],
  "skills": [
    {
      "_id": "1",
      "skill": {
        "_id": "1",
        "name": "html",
        "image": "/images/picture.png",
        "type": StackType.front,
        "isNotCompitable": false
      },
      "mastery": SkillMastery.Proficient,
      "type": StackType.front,
      "order": 1
    },
    {
      "_id": "2",
      "skill": {
        "_id": "2",
        "name": "css",
        "image": "/images/picture.png",
        "type": StackType.front,
        "isNotCompitable": true
      },
      "mastery": SkillMastery.Proficient,
      "type": StackType.front,
      "order": 1
    }
  ],
  "works": [
    {
      "_id": "1",
      "name": "Project One",
      "description": "Project One Description",
      "stackType": StackType.front,
      "importance": Importance.Glowing,
      "showInCv": true,
      "showInWebsite": true,
      "links": {
        "github": "https://github.com",
        "demo": "https://demo.com",
        "apiRepo": "https://api-repo.com",
        "apiDocs": "https://api-docs.com"
      },
      "images": {
        "desktop": "/images/picture.png",
        "mobile": "/images/picture.png"
      },
      "stack": [
        {
          "_id": "1",
          "stack": {
            "_id": "1",
            "name": "html",
            "image": "/images/picture.png",
            "type": StackType.front,
            "isNotCompitable": false
          },
          "order": 1
        }
      ],
      "order": 1
    },
    {
      "_id": "2",
      "name": "Project Two",
      "description": "Project Two Description",
      "stackType": StackType.full,
      "importance": Importance.Glowing,
      "showInCv": true,
      "showInWebsite": false,
      "links": {
        "github": "https://github.com",
        "demo": "https://demo.com",
        "apiRepo": "https://api-repo.com",
        "apiDocs": "https://api-docs.com"
      },
      "images": {
        "desktop": "/images/picture.png",
        "mobile": "/images/picture.png"
      },
      "stack": [
        {
          "_id": "1",
          "stack": {
            "_id": "1",
            "name": "html",
            "image": "/images/picture.png",
            "type": StackType.front,
            "isNotCompitable": false
          },
          "order": 1
        }
      ],
      "order": 2
    }
  ],
  "certificates": [
    {
      "_id": "1",
      "title": "certificate 1",
      "issuanceDate": "Sun Nov 05 2023 00:00:00 GMT+0200 (Eastern European Standard Time)",
      "issuanceSource": "coursera",
      "sourceLink": "https://coursera.com/certificate1",
      "description": "certificate number 1 description",
      "image": "/images/picture.png",
      "showInWebsite": true,
      "showInCv": true,
      "order": 1
    },
    {
      "_id": "2",
      "title": "certificate 2",
      "issuanceDate": "Sun Nov 05 2023 00:00:00 GMT+0200 (Eastern European Standard Time)",
      "issuanceSource": "coursera",
      "sourceLink": "https://coursera.com/certificate1",
      "description": "certificate number 2 description",
      "image": "/images/picture.png",
      "showInWebsite": true,
      "showInCv": true,
      "order": 2
    }
  ],
  "testimonials": [
    {
      "_id": "1",
      "authorName": "mohamed ali",
      "authorPosition": "client",
      "content": "hassan ali is a good developer",
      "rating": 4
    },
    {
      "_id": "2",
      "authorName": "baraa ali",
      "authorPosition": "client",
      "content": "hassan ali is a great developer",
      "rating": 5
    }
  ]
}