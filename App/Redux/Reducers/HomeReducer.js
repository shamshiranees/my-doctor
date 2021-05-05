import {
  SET_CURRENCY_DATA,
  ADD_CURRENCY,
  REMOVE_CURRENCY,
} from '../Actions/types';
import Images from '../../Theme/Images';
const INITIAL_STATE = {
  myCurrencies: ['BTC', 'ETH'],
  data: [
    {title: 'Pregnancy Issues', image: Images.homeIcon1},
    {title: 'Stress & Anxiety', image: Images.homeIcon2},
    {title: 'Bone & Joint Issues', image: Images.homeIcon3},
    {title: 'Diabetes', image: Images.homeIcon4},
    {title: 'Stomach Pain', image: Images.homeIcon5},
    {title: 'Pimples & Acne', image: Images.homeIcon6},
    {title: 'Hair $ Scalp issues', image: Images.homeIcon7},
    {title: 'Sexual Disorder', image: Images.homeIcon8},
  ],
  specilists: [
    {title: 'Cardiologist', image: Images.Cardiologist},
    {title: 'Dentist', image: Images.Dentist},
    {title: 'Dermatologist', image: Images.Dermatologist},
    {title: 'Diabetologist', image: Images.Diabetologist},
    {title: 'ENT', image: Images.ENT},
    {title: 'FertilitySpecialist', image: Images.FertilitySpecialist},
    {title: 'Gastroenterologist', image: Images.Gastroenterologist},
    {title: 'Gynaecologist', image: Images.Gynaecologist},
    {title: 'Pediatrician', image: Images.Pediatrician},
  ],
  doctors: [
    {
      id: '1',
      Name: 'Dr. Shana',
      years_of_experience: '15',
      gender: 'Male',
      specialisation: 'Dermatologist',
      hostpital_id: '1',
      qualification: 'M.B.B.S',
      keywords:
        'Skin, Dermatologist, Aesthetic Dermatologist, Cosmetologist, Trichologist, Dermatosurgeon, Pediatric Dermatologist',
      image:
        'https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop4',
      languages: 'English',
      consulting_fees: '600',
      description:
        'Dr. Jyothsna is a Dermatologist,Aesthetic Dermatologist and Cosmetologist in Saligramam, Chennai and has an experience of 8 years in these fields. Dr. Jyothsna practices at Curves Cosmetic Surgery, Skin & Laser Clinic in Saligramam, Chennai. She completed MBBS from Rangaraya Medical College, Kakinada in 2007 and DDV from Sri Venkateswara Institute of Medical Sciences (SVIMS), Tirupati in 2011. \n She is a member of Indian Association of Dermatologists, Venereologists and Leprologists (IADVL). Some of the services provided by the doctor are: Hair Disease,Body Sculpting,Glutathione - Skin Whitening,Dermatitis Treatment and Hair Care etc.',
      consulatation_days: 'Mon, Wed - Thu, Sat',
      consultation_time: '09:00 AM - 10:00 AM',
    },
    {
      id: '2',
      Name: 'Dr. Deepak Raj',
      years_of_experience: '12',
      gender: 'Male',
      specialisation: 'Dentist',
      hostpital_id: '1',
      qualification: 'BDS, MDS - Periodontics',
      keywords:
        'Teeth, Tooth, Dentist, Implantologist, Cosmetic/Aesthetic Dentist, Periodontist',
      image:
        'https://yt3.ggpht.com/ytc/AAUvwnhcBB84jOaSCy4Xtz2hh8yUCUPt4sd0iINXCxSI=s900-c-k-c0x00ffffff-no-rj',
      languages: 'English',
      consulting_fees: '600',
      description:
        'Dr. Deepak Raj is a Dentist,Implantologist and Cosmetic/Aesthetic Dentist in Kolathur, Chennai and has an experience of 12 years in these fields. Dr. Deepak Raj practices at Raj Implant and Orthodontic Center in Kolathur, Chennai. He completed BDS from Saveetha Dental College and Hospital, Chennai (Madras) in 2009 and MDS - Periodontics from Saveetha Dental College and Hospital, Chennai (Madras) in 2013.\n He is a member of Indian Dental Association. Some of the services provided by the doctor are: Scaling / Polishing,Orthotic Splints, Tooth Extraction,Ceramic Veneers / Crowns and Fixed Partial Denture (FPD) etc',
      consulatation_days: 'Mon, Wed - Thu, Sat',
      consultation_time: '09:00 AM - 10:00 AM',
    },
    {
      id: '3',
      Name: 'Dr. Akila Mani',
      years_of_experience: '20',
      gender: 'Female',
      specialisation: 'General Physician',
      hostpital_id: '1',
      qualification: 'MBBS, MRCP (UK), Diploma in Child Health (DCH)',
      keywords:
        'General Physician, Fever, Cold, Cough, Bodyache, Stomachache, Pediatrician',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      languages: 'English',
      consulting_fees: '600',
      description:
        'Dr. Akila Mani is a General Physician and Pediatrician in Vanagaram, Chennai and has an experience of 20 years in these fields. Dr. Akila Mani practices at Apollo Speciality Hospital in Vanagaram, Chennai,Apollo Family Clinic in Valasaravakkam, Chennai and NRG Multispecialty Clinic in Saligramam, Chennai. She completed MBBS from PSG medical college coimbatore.DR.MGR Medical University in 2001,MRCP (UK) from Royal Colleges of Physicians , U K in 2011 and Diploma in Child Health (DCH) from Royal College of Pediatrics and Child Health, London in 2006.\n She is a member of Royal College of Physicians (UK),Royal College of General Practitioners (UK) and Tamilnadu Medical Council. Some of the services provided by the doctor are: Foot infection,Hypertriglyceridemia,Diabetic Ulcer Treatment,Diabetic Diet Counseling and Diabetes Management etc.',
      consulatation_days: 'Mon, Wed - Thu, Sat',
      consultation_time: '09:00 AM - 10:00 AM',
    },
    {
      id: '1',
      Name: 'Dr. John wick',
      years_of_experience: '15',
      gender: 'Male',
      specialisation: 'Dermatologist',
      hostpital_id: '1',
      qualification: 'M.B.B.S',
      keywords:
        'Skin, Dermatologist, Aesthetic Dermatologist, Cosmetologist, Trichologist, Dermatosurgeon, Pediatric Dermatologist',
      image: 'https://randomuser.me/api/portraits/men/33.jpg',
      languages: 'English',
      consulting_fees: '600',
      description:
        'Dr. Jyothsna is a Dermatologist,Aesthetic Dermatologist and Cosmetologist in Saligramam, Chennai and has an experience of 8 years in these fields. Dr. Jyothsna practices at Curves Cosmetic Surgery, Skin & Laser Clinic in Saligramam, Chennai. She completed MBBS from Rangaraya Medical College, Kakinada in 2007 and DDV from Sri Venkateswara Institute of Medical Sciences (SVIMS), Tirupati in 2011. \n She is a member of Indian Association of Dermatologists, Venereologists and Leprologists (IADVL). Some of the services provided by the doctor are: Hair Disease,Body Sculpting,Glutathione - Skin Whitening,Dermatitis Treatment and Hair Care etc.',
      consulatation_days: 'Mon, Wed - Thu, Sat',
      consultation_time: '09:00 AM - 10:00 AM',
    },
    {
      id: '2',
      Name: 'Dr. Linto',
      years_of_experience: '12',
      gender: 'Male',
      specialisation: 'Dentist',
      hostpital_id: '1',
      qualification: 'BDS, MDS - Periodontics',
      keywords:
        'Teeth, Tooth, Dentist, Implantologist, Cosmetic/Aesthetic Dentist, Periodontist',
      image: 'https://randomuser.me/api/portraits/men/19.jpg',
      languages: 'English',
      consulting_fees: '600',
      description:
        'Dr. Deepak Raj is a Dentist,Implantologist and Cosmetic/Aesthetic Dentist in Kolathur, Chennai and has an experience of 12 years in these fields. Dr. Deepak Raj practices at Raj Implant and Orthodontic Center in Kolathur, Chennai. He completed BDS from Saveetha Dental College and Hospital, Chennai (Madras) in 2009 and MDS - Periodontics from Saveetha Dental College and Hospital, Chennai (Madras) in 2013.\n He is a member of Indian Dental Association. Some of the services provided by the doctor are: Scaling / Polishing,Orthotic Splints, Tooth Extraction,Ceramic Veneers / Crowns and Fixed Partial Denture (FPD) etc',
      consulatation_days: 'Mon, Wed - Thu, Sat',
      consultation_time: '09:00 AM - 10:00 AM',
    },
    {
      id: '3',
      Name: 'Dr. Laura',
      years_of_experience: '20',
      gender: 'Female',
      specialisation: 'General Physician',
      hostpital_id: '1',
      qualification: 'MBBS, MRCP (UK), Diploma in Child Health (DCH)',
      keywords:
        'General Physician, Fever, Cold, Cough, Bodyache, Stomachache, Pediatrician',
      image: 'https://randomuser.me/api/portraits/women/66.jpg',
      languages: 'English',
      consulting_fees: '600',
      description:
        'Dr. Akila Mani is a General Physician and Pediatrician in Vanagaram, Chennai and has an experience of 20 years in these fields. Dr. Akila Mani practices at Apollo Speciality Hospital in Vanagaram, Chennai,Apollo Family Clinic in Valasaravakkam, Chennai and NRG Multispecialty Clinic in Saligramam, Chennai. She completed MBBS from PSG medical college coimbatore.DR.MGR Medical University in 2001,MRCP (UK) from Royal Colleges of Physicians , U K in 2011 and Diploma in Child Health (DCH) from Royal College of Pediatrics and Child Health, London in 2006.\n She is a member of Royal College of Physicians (UK),Royal College of General Practitioners (UK) and Tamilnadu Medical Council. Some of the services provided by the doctor are: Foot infection,Hypertriglyceridemia,Diabetic Ulcer Treatment,Diabetic Diet Counseling and Diabetes Management etc.',
      consulatation_days: 'Mon, Wed - Thu, Sat',
      consultation_time: '09:00 AM - 10:00 AM',
    },
  ],
  heartQuestions: [
    {
      question: 'Please let me know how old are you?',
      answers: [
        {
          ans: '20 years and less',
          points: '1',
        },
        {
          ans: '21 to 30 years',
          points: '2',
        },
        {
          ans: '31 to 40 years',
          points: '3',
        },
        {
          ans: '41 to 50 years',
          points: '4',
        },
        {
          ans: '51 to 60 years',
          points: '5',
        },
        {
          ans: 'above 60 years',
          points: '6',
        },
      ],
    },
    {
      question: 'And you are..',
      answers: [
        {
          ans: 'Male',
          points: '2',
        },
        {
          ans: 'Female',
          points: '1',
        },
        {
          ans: 'Other',
          points: '1',
        },
      ],
    },
    {
      question: 'Do you relate with any of these symptoms?',
      answers: [
        {
          ans: 'Pounding heart beat at rest',
          points: '2',
        },
        {
          ans: 'Giddiness/fainting',
          points: '2',
        },
        {
          ans: 'Breathlessness while walking',
          points: '2',
        },
        {
          ans: 'Chest pain',
          points: '4',
        },
        {
          ans: 'None of the above',
          points: '0',
        },
      ],
    },
    {
      question:
        'Adults with high cholesterol level seems to be at higher risk of developing cardiac issues. Have you had your cholesterol tested recently?',
      answers: [
        {
          ans: 'YES',
          points: '-1',
        },
        {
          ans: 'NO',
          points: '-1',
        },
      ],
      childQuestion: {
        YES: {
          question: 'Did your report mention any of these abnormalities?',
          answers: [
            {
              ans: 'High LDL',
              points: '3',
            },
            {
              ans: 'Low HDL',
              points: '3',
            },
            {
              ans: 'High Total Cholesterol',
              points: '3',
            },
            {
              ans: 'High Triglycerides',
              points: '3',
            },
            {
              ans: 'Cholesterol level controlled with medication',
              points: '3',
            },
            {
              ans: 'None of the above',
              points: '0',
            },
          ],
        },
      },
    },
    {
      question: 'Do you have high blood pressure?',
      answers: [
        {
          ans: 'Yes, I have high BP',
          points: '3',
        },
        {
          ans: "No, I've always had normal BP",
          points: '0',
        },
        {
          ans: 'I have low BP',
          points: '2',
        },
        {
          ans: "I don't know",
          points: '0',
        },
      ],
    },
    {
      question:
        'Have you heard, you might be at a higher risk of getting a heart attack if you smoke.\n Do you smoke or constantly exposed to passive smoke for the last 12 months?',
      answers: [
        {
          ans: 'YES',
          points: '5',
        },
        {
          ans: 'NO',
          points: '0',
        },
        {
          ans: 'More than one year since I quit',
          points: '2',
        },
      ],
    },
    {
      question: 'Do you drink alcohol?',
      answers: [
        {
          ans: 'Occasionally',
          points: '2',
        },
        {
          ans: 'Everyday',
          points: '5',
        },
        {
          ans: "I don't drink",
          points: '0',
        },
      ],
    },
    {
      question: 'Have you experienced any of the following conditions?',
      answers: [
        {
          ans: 'Heart attack',
          points: '5',
        },
        {
          ans: 'Stroke',
          points: '5',
        },
        {
          ans: 'Both',
          points: '10',
        },
        {
          ans: 'None of the above',
          points: '0',
        },
      ],
    },
    {
      question:
        'Has anyone in your immediate family experienced the following diseases or procedures?',
      answers: [
        {
          ans: 'Heart attack',
          points: '2',
        },
        {
          ans: 'Stroke',
          points: '2',
        },
        {
          ans: 'Stent placement/Angioplasty',
          points: '2',
        },
        {
          ans: 'None of the above',
          points: '0',
        },
      ],
    },
    {
      question: 'Do you have diabetes?',
      answers: [
        {
          ans: 'YES',
          points: '3',
        },
        {
          ans: 'NO',
          points: '0',
        },
      ],
    },
    {
      question: 'Have you ever had any of the following tests?',
      answers: [
        {
          ans: 'ECG',
          points: '-1',
        },
        {
          ans: 'Echo',
          points: '-1',
        },
        {
          ans: 'Troponin I/Troponin T',
          points: '-1',
        },
        {
          ans: 'None',
          points: '0',
        },
      ],
      childQuestion: {
        allOthers: {
          question: 'If any test selected - Were these tests found normal?',
          answers: [
            {
              ans: 'Yes, they were normal.',
              points: '0',
            },
            {
              ans: 'No, there was some abnormalities.',
              points: '5',
            },
          ],
        },
      },
    },
    {
      question:
        "Do you know? Individuals who exercise have a lower risk of heart disease than those who don't. \n Which one of the following statements best describes your usual day?",
      answers: [
        {
          ans: '20-30 mins/day; high intensity',
          points: '0',
        },
        {
          ans: '30-40 mins/day; low intensity',
          points: '0',
        },
        {
          ans: 'only few days a week',
          points: '2',
        },
        {
          ans: "I don't workout",
          points: '5',
        },
      ],
    },
    {
      question:
        'How many servings of red meat do ypu eat per month? \n (eg: mutton, steak, ham, bacon, sausage, beef, etc.)\n 1 serving size - 100gms.',
      answers: [
        {
          ans: '10 or more servings',
          points: '5',
        },
        {
          ans: '1 to 9 servings',
          points: '3',
        },
        {
          ans: "I don't eat red meat",
          points: '0',
        },
      ],
    },
    {
      question:
        'All done. \n Let me gather your responses! \nRemember, your lifestyle plays a major role in keeping your heart healthy. Make right choices.',
      answers: [
        {
          ans: 'SUBMIT',
          points: '-1',
        },
      ],
    },
  ],

  common: [
    {
      question: 'Please let me know how old are you?',
      answers: [
        {
          ans: '20 years and less',
          points: '1',
        },
        {
          ans: '21 to 30 years',
          points: '2',
        },
        {
          ans: '31 to 40 years',
          points: '3',
        },
        {
          ans: '41 to 50 years',
          points: '4',
        },
        {
          ans: '51 to 60 years',
          points: '5',
        },
        {
          ans: 'above 60 years',
          points: '6',
        },
      ],
    },
    {
      question: 'And you are..',
      answers: [
        {
          ans: 'Male',
          points: '2',
        },
        {
          ans: 'Female',
          points: '1',
        },
        {
          ans: 'Other',
          points: '1',
        },
      ],
    },
    {
      question: 'Do you relate with any of these symptoms?',
      answers: [
        {
          ans: 'Pounding heart beat at rest',
          points: '2',
        },
        {
          ans: 'Giddiness/fainting',
          points: '2',
        },
        {
          ans: 'Breathlessness while walking',
          points: '2',
        },
        {
          ans: 'Chest pain',
          points: '4',
        },
        {
          ans: 'None of the above',
          points: '0',
        },
      ],
    },
    {
      question:
        'Adults with high cholesterol level seems to be at higher risk of developing cardiac issues. Have you had your cholesterol tested recently?',
      answers: [
        {
          ans: 'YES',
          points: '-1',
        },
        {
          ans: 'NO',
          points: '-1',
        },
      ],
      childQuestion: {
        YES: {
          question: 'Did your report mention any of these abnormalities?',
          answers: [
            {
              ans: 'High LDL',
              points: '3',
            },
            {
              ans: 'Low HDL',
              points: '3',
            },
            {
              ans: 'High Total Cholesterol',
              points: '3',
            },
            {
              ans: 'High Triglycerides',
              points: '3',
            },
            {
              ans: 'Cholesterol level controlled with medication',
              points: '3',
            },
            {
              ans: 'None of the above',
              points: '0',
            },
          ],
        },
      },
    },
    {
      question: 'Do you have high blood pressure?',
      answers: [
        {
          ans: 'Yes, I have high BP',
          points: '3',
        },
        {
          ans: "No, I've always had normal BP",
          points: '0',
        },
        {
          ans: 'I have low BP',
          points: '2',
        },
        {
          ans: "I don't know",
          points: '0',
        },
      ],
    },
    {
      question:
        'Have you heard, you might be at a higher risk of getting a heart attack if you smoke.\n Do you smoke or constantly exposed to passive smoke for the last 12 months?',
      answers: [
        {
          ans: 'YES',
          points: '5',
        },
        {
          ans: 'NO',
          points: '0',
        },
        {
          ans: 'More than one year since I quit',
          points: '2',
        },
      ],
    },
    {
      question: 'Do you drink alcohol?',
      answers: [
        {
          ans: 'Occasionally',
          points: '2',
        },
        {
          ans: 'Everyday',
          points: '5',
        },
        {
          ans: "I don't drink",
          points: '0',
        },
      ],
    },
    {
      question: 'Have you experienced any of the following conditions?',
      answers: [
        {
          ans: 'Heart attack',
          points: '5',
        },
        {
          ans: 'Stroke',
          points: '5',
        },
        {
          ans: 'Both',
          points: '10',
        },
        {
          ans: 'None of the above',
          points: '0',
        },
      ],
    },
    {
      question:
        'Has anyone in your immediate family experienced the following diseases or procedures?',
      answers: [
        {
          ans: 'Heart attack',
          points: '2',
        },
        {
          ans: 'Stroke',
          points: '2',
        },
        {
          ans: 'Stent placement/Angioplasty',
          points: '2',
        },
        {
          ans: 'None of the above',
          points: '0',
        },
      ],
    },
    {
      question: 'Do you have diabetes?',
      answers: [
        {
          ans: 'YES',
          points: '3',
        },
        {
          ans: 'NO',
          points: '0',
        },
      ],
    },
    {
      question: 'Have you ever had any of the following tests?',
      answers: [
        {
          ans: 'ECG',
          points: '-1',
        },
        {
          ans: 'Echo',
          points: '-1',
        },
        {
          ans: 'Troponin I/Troponin T',
          points: '-1',
        },
        {
          ans: 'None',
          points: '0',
        },
      ],
      childQuestion: {
        allOthers: {
          question: 'If any test selected - Were these tests found normal?',
          answers: [
            {
              ans: 'Yes, they were normal.',
              points: '0',
            },
            {
              ans: 'No, there was some abnormalities.',
              points: '5',
            },
          ],
        },
      },
    },
    {
      question:
        "Do you know? Individuals who exercise have a lower risk of heart disease than those who don't. \n Which one of the following statements best describes your usual day?",
      answers: [
        {
          ans: '20-30 mins/day; high intensity',
          points: '0',
        },
        {
          ans: '30-40 mins/day; low intensity',
          points: '0',
        },
        {
          ans: 'only few days a week',
          points: '2',
        },
        {
          ans: "I don't workout",
          points: '5',
        },
      ],
    },
    {
      question:
        'How many servings of red meat do ypu eat per month? \n (eg: mutton, steak, ham, bacon, sausage, beef, etc.)\n 1 serving size - 100gms.',
      answers: [
        {
          ans: '10 or more servings',
          points: '5',
        },
        {
          ans: '1 to 9 servings',
          points: '3',
        },
        {
          ans: "I don't eat red meat",
          points: '0',
        },
      ],
    },
    {
      question:
        'All done. \n Let me gather your responses! \nRemember, your lifestyle plays a major role in keeping your heart healthy. Make right choices.',
      answers: [
        {
          ans: 'SUBMIT',
          points: '-1',
        },
      ],
    },
  ],
  stressQuestions: [
    {
      question:
        'Hey, I am AI assistant. I will help you with this self-check. Nice to meet you. \n And you are ...',
      answers: [
        {
          ans: 'Male, 18-40 years',
          points: '3',
        },
        {
          ans: 'Female, 18-40 yearss',
          points: '3',
        },
        {
          ans: 'Male 40+ years',
          points: '5',
        },
        {
          ans: 'Female 40+ years',
          points: '5',
        },
        {
          ans: 'Prefer not to say',
          points: '4',
        },
      ],
    },
    {
      question: 'Reason for doing this self-check is...',
      answers: [
        {
          ans: 'I want to know if I am stressed because of work',
          points: '3',
        },
        {
          ans: 'I am afraid of being laid off',
          points: '3',
        },
        {
          ans: 'I have poor work relationships with peers',
          points: '3',
        },
        {
          ans: 'No problem as such',
          points: '0',
        },
      ],
    },
    {
      question: 'How supportive are your co-workers?',
      answers: [
        {
          ans: 'They support me all the time.',
          points: '0',
        },
        {
          ans: "The don't support me at all.",
          points: '4',
        },
      ],
    },
    {
      question:
        'Tell me, are you confident in doing your work and delivering what is expected.',
      answers: [
        {
          ans: 'YES',
          points: '0',
        },
        {
          ans: 'No',
          points: '3',
        },
      ],
    },
    {
      question:
        'Suppose you get negative reviews at the office. What do you do?',
      answers: [
        {
          ans: 'I welcome negative reviews. It helps me grow.',
          points: '0',
        },
        {
          ans:
            'I take it with a pinch of salf. I know I will do better next time.',
          points: '2',
        },
        {
          ans: 'I am indifferent to them.',
          points: '3',
        },
        {
          ans: "I feel bad. It's like they are blaming me.",
          points: '5',
        },
      ],
    },
    {
      question: 'How many hours do you work?',
      answers: [
        {
          ans: '6-8 hours',
          points: '0',
        },
        {
          ans: '8-10 hours',
          points: '2',
        },
        {
          ans: '10-12 hours',
          points: '4',
        },
        {
          ans: '12+ hours',
          points: '8',
        },
      ],
    },
    {
      question: 'How do you feel about handling a crisis at work?',
      answers: [
        {
          ans: "I'm capable of handling any crisis at work.",
          points: '0',
        },
        {
          ans:
            'I can handle small matters. I get nervous when it comes to major crises.',
          points: '2',
        },
        {
          ans: 'I need support to handle any crisis at work.',
          points: '4',
        },
        {
          ans: 'I cannot handle any crisis at work.',
          points: '8',
        },
      ],
    },
    {
      question: 'Do you like it where you work?',
      answers: [
        {
          ans: "I do not like it, I'm looking for other options.",
          points: '5',
        },
        {
          ans: 'I love it here!',
          points: '0',
        },
        {
          ans: "I have people dependent on me, I don't have any other option.",
          points: '3',
        },
        {
          ans: "I'm in it for money, but I like my work.",
          points: '1',
        },
      ],
    },
    {
      question:
        'Do you find yourself skipping work meetings or taking leaves often',
      answers: [
        {
          ans: 'YES',
          points: '0',
        },
        {
          ans: 'NO',
          points: '4',
        },
      ],
    },
    {
      question:
        'In a past conflict with a co-worker (a colleague or a supervisor), which scenario had applied to you the most?',
      answers: [
        {
          ans: 'I felt shocked! I have not been able to resolve the conflict.',
          points: '5',
        },
        {
          ans:
            'i felt angry! I left the meeting to regain composture. I resolved the conflict in time.',
          points: '30',
        },
        {
          ans: 'I felt hurt. I was overwhelmed and unable to function at work.',
          points: '40',
        },
        {
          ans:
            'I felt bad, but I remained calm and resolved the conflict logically.',
          points: '0',
        },
      ],
    },
    {
      question:
        "I hope you find time to spend with friends and family, don't you?",
      answers: [
        {
          ans: 'Always. I keep my work and family life balanced.',
          points: '0',
        },
        {
          ans: 'I somehow tries to find some time for my family and friends.',
          points: '3',
        },
        {
          ans: 'I can hardly spare any time for time.',
          points: '6',
        },
      ],
    },
    {
      question: 'Can you tell me if you find time to relax?',
      answers: [
        {
          ans: 'Yes, I make time for hobbies I enjoy.',
          points: '0',
        },
        {
          ans:
            'Yes, I relax by engaging in some calming activities like yoga, meditation, etc.',
          points: '0',
        },
        {
          ans: 'Yes, I like spending time with the people I love.',
          points: '0',
        },
        {
          ans: 'No',
          points: '5',
        },
      ],
    },
    {
      question:
        'We are almost done \n Do you experience any physical symptoms of stress?',
      answers: [
        {
          ans: 'Tiredness',
          points: '5',
        },
        {
          ans: 'Frequent headache',
          points: '5',
        },
        {
          ans: 'Stomach upset',
          points: '5',
        },
        {
          ans: 'Others (body pain, nausea, etc)',
          points: '5',
        },
        {
          ans: 'No',
          points: '0',
        },
      ],
    },
    {
      question:
        'Can you relate to this: Career-wise, I can see a bright future in the next 5 years.',
      answers: [
        {
          ans: 'YES',
          points: '0',
        },
        {
          ans: 'NO',
          points: '5',
        },
      ],
    },
    {
      question: 'Before you go, have you been sleeping and resting well.',
      answers: [
        {
          ans: 'Yes, very well',
          points: '0',
        },
        {
          ans: 'I eat less/sleep less.',
          points: '3',
        },
        {
          ans: 'I overeat/oversleep.',
          points: '3',
        },
      ],
    },
    {
      question:
        "Hey, thanks for sharing with me. I am summarising your responses now. \n Always remember to reach out for support when you can't find any at work.",
      answers: [
        {
          ans: 'SUBMIT',
          points: '-1',
        },
      ],
    },
  ],
  hospitals: [
    {
      id: '1',
      name: 'Apollo Speciality Hospital',
      address:
        'J&B Building, Sobha Road, Edapally Toll Junction, Landmark: Opposite To Reliance Fresh and K.R.Bakery., Ernakulam',
      phone_no: '4712514567',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7MqTEpwA0hxuZRKKTiLzx09od_3J3oUns9g&usqp=CAU',
    },
    {
      id: '3',
      name: 'Progress Heart & Multi Speciality Clinic',
      address:
        '31/363, Kavalampillil Lane, Paradise Road, Landmark: Near Abad Apartment, Ernakulam',
      phone_no: '4712554555',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMGMUwoWJLWzwb4VQTOZF75Pd-gpheSK5A3w&usqp=CAU',
    },
    {
      id: '4',
      name: 'Kims Health Hospital',
      address: '1, Vinod Nagar Rd, Anayara, Thiruvananthapuram, Kerala 695029',
      phone_no: '4712534997',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBDdCcpxgsq1mtVJdp3yml0wiFrXFt9JUHrw&usqp=CAU',
    },
    {
      id: '5',
      name: 'CSI Mission Hospital',
      address:
        'P.O, Panvel-Kochi-Kanyakumari Highway Opp Al-Sai International Convention Centre Karakonam, Vadakkumbhagam, Thiruvananthapuram, Kerala 695582',
      phone_no: '4712345674',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAkHazrTliD3sFsZuV5m9J1aJHSIoQSKbF8g&usqp=CAU',
    },
    {
      id: '6',
      name: 'Little River HealthCare Clinic',
      address: ' Cherthala,, Chakkarakulam, Cherthala, Kerala 688524',
      phone_no: '4832345432',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM9LX6kWzRKxXx0BtAUWtI-hXnMlTAKmvypg&usqp=CAU',
    },
  ],
};
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_CURRENCY_DATA:
      return {...state, data: action.payload};
    case ADD_CURRENCY:
      return {
        ...state,
        myCurrencies: [...state.myCurrencies.concat(action.payload)],
      };
    case REMOVE_CURRENCY:
      return {
        ...state,
        myCurrencies: removeVal(state.myCurrencies, action.payload),
      };
    default:
      return state;
  }
}

function removeVal(myCurrencies, val) {
  var array = JSON.parse(JSON.stringify(myCurrencies));
  var index = array.indexOf(val);
  if (index > -1) {
    array.splice(index, 1);
  }
  return array;
}
