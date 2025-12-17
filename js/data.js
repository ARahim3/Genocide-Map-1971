// 1971 Bangladesh Genocide Sites Data
// Parsed from historical documentation of 550+ mass killing sites across 64 districts

const genocideData = {
  intro: {
    title: "Scars of a Nation: Mapping the 1971 Killing Fields of Bangladesh",
    titleBn: "জাতির ক্ষত: ১৯৭১ সালের গণহত্যার মানচিত্র",
    description: "Every corner of Bangladesh bears the scars of 1971. This interactive map documents 550+ mass killing sites across all 64 districts where the Pakistani military and their collaborators committed genocide during the Liberation War.",
    descriptionBn: "বাংলাদেশের প্রতিটি কোণ ১৯৭১ সালের ক্ষত বহন করে। এই ইন্টারঅ্যাক্টিভ মানচিত্র ৬৪টি জেলা জুড়ে ৫৫০+ বধ্যভূমি নথিভুক্ত করে যেখানে মুক্তিযুদ্ধের সময় পাকিস্তানি সেনাবাহিনী এবং তাদের সহযোগীরা গণহত্যা চালিয়েছিল।"
  },

  stats: {
    totalDistricts: 64,
    documentedSites: 550,
    estimatedCasualties: "1.5M+",
    coverage: "100% of Bangladesh"
  },

  districts: [
    {
      id: 1,
      name: "Cox's Bazar",
      nameBn: "কক্সবাজার",
      division: "Chittagong",
      divisionBn: "চট্টগ্রাম",
      siteCount: 4,
      sites: [
        {
          name: "Rest House Killing Field",
          nameBn: "রেস্ট হাউসের পেছনের বধ্যভূমি",
          location: "Behind the old rest house ground, currently 17 ECB office",
          locationBn: "শহরের পুরনো রেস্টহাউস ময়দান, বর্তমানে ১৭ ইসিবির অফিস"
        },
        {
          name: "Teknaf Killing Field",
          nameBn: "টেকনাফ বধ্যভূমি",
          location: "Naitong Hill and Jalil Well in Teknaf",
          locationBn: "টেকনাফের নাইটং পাহাড় ও জলিল কূয়া"
        },
        {
          name: "Maheshkhali Killing Field",
          nameBn: "মহেশখালী বধ্যভূমি",
          location: "3 locations near Adinath Temple hill",
          locationBn: "আদিনাথ মন্দির সংলগ্ন পাহাড়ের ৩টি স্থান"
        },
        {
          name: "Moddhom Nuniachhara",
          nameBn: "মধ্যম নুনিয়াছড়া",
          location: "Fishery Ghat area, Cox's Bazar town",
          locationBn: "ফিশারি ঘাট এলাকা, কক্সবাজার শহর"
        }
      ]
    },
    {
      id: 2,
      name: "Kishoreganj",
      nameBn: "কিশোরগঞ্জ",
      division: "Dhaka",
      divisionBn: "ঢাকা",
      siteCount: 5,
      sites: [
        {
          name: "Baroitola Massacre",
          nameBn: "বড়ইতলা গণহত্যা",
          location: "Jashodol Union, Kishoreganj Sadar",
          locationBn: "যশোদল ইউনিয়ন, কিশোরগঞ্জ সদর",
          casualties: 365
        },
        {
          name: "Hosenpur Kurighat Killing Field",
          nameBn: "হোসেনপুর কুড়িঘাট বধ্যভূমি",
          location: "Banks of Brahmaputra River",
          locationBn: "ব্রহ্মপুত্র নদের তীরে"
        },
        {
          name: "Itna Boyra Killing Field",
          nameBn: "ইটনা বয়রা বধ্যভূমি",
          location: "Boyra village in haor-dominated Itna upazila",
          locationBn: "হাওড় অধ্যুষিত ইটনা উপজেলার বয়রা গ্রাম"
        },
        {
          name: "Sholmara Killing Field",
          nameBn: "শোলমারা বধ্যভূমি",
          location: "Under Sholmara Bridge, Mohinondo Union",
          locationBn: "মহিনন্দ ইউনিয়ন, শোলমারা সেতুর নিচে"
        },
        {
          name: "Panaullahchar-Algar",
          nameBn: "পানাউল্লাহরচর-আলগড়",
          location: "Bhairab, banks of Brahmaputra River",
          locationBn: "ভৈরব, ব্রহ্মপুত্র নদের তীর"
        }
      ]
    },
    {
      id: 3,
      name: "Cumilla",
      nameBn: "কুমিল্লা",
      division: "Chittagong",
      divisionBn: "চট্টগ্রাম",
      siteCount: 9,
      sites: [
        {
          name: "Mainamati Cantonment Killing Field",
          nameBn: "ময়নামতি সেনানিবাস বধ্যভূমি",
          location: "Various pits inside the cantonment",
          locationBn: "সেনানিবাসের ভেতরে বিভিন্ন গর্ত"
        },
        {
          name: "Laksam Cigarette Factory",
          nameBn: "লাকসাম সিগারেট কারখানা",
          location: "Southwest of Laksam Junction",
          locationBn: "লাকসাম জংশনের দক্ষিণ পশ্চিমে"
        },
        {
          name: "Beltoli Killing Field",
          nameBn: "বেলতলি বধ্যভূমি",
          location: "Slightly south of Laksam Sadar",
          locationBn: "লাকসাম সদর থেকে একটু দক্ষিণে"
        },
        {
          name: "Dhananjoy's Khondokar House",
          nameBn: "ধনাঞ্জয়ের খন্দকার বাড়ি",
          location: "Amratoli Union",
          locationBn: "আমড়াতলি ইউনিয়ন"
        },
        {
          name: "Mudaffarganj Nagaripara",
          nameBn: "মুদাফফরগঞ্জের নগরীপাড়",
          location: "Laksam Thana",
          locationBn: "লাকসাম থানা"
        },
        {
          name: "Homna Killing Field",
          nameBn: "হোমনার বধ্যভূমি",
          location: "A pond west of Homna-Srimati Road",
          locationBn: "হোমনা-শ্রীমতি সড়কের পশ্চিমে একটি পুকুর"
        },
        {
          name: "Rasulpur & Dishabondor Killing Field",
          nameBn: "রসুলপুর ও দিশাবন্দের বধ্যভূমি",
          location: "Beside the railway line",
          locationBn: "রেল লাইনের পাশে"
        },
        {
          name: "Haratoli Mass Grave",
          nameBn: "হাড়াতলি গণকবর",
          location: "Laksam Thana",
          locationBn: "লাকসাম থানা"
        },
        {
          name: "Betiyara Mass Grave",
          nameBn: "বেতিয়ারা গণকবর",
          location: "Chauddagram, beside Dhaka-Chittagong Highway",
          locationBn: "চৌদ্দগ্রাম, ঢাকা-চট্টগ্রাম মহাসড়কের পাশে"
        }
      ]
    },
    {
      id: 4,
      name: "Kurigram",
      nameBn: "কুড়িগ্রাম",
      division: "Rangpur",
      divisionBn: "রংপুর",
      siteCount: 16,
      sites: [
        {
          name: "Kurigram Jail",
          nameBn: "কুড়িগ্রাম জেলখানা",
          location: "5 jail guards killed inside the prison",
          locationBn: "কারাগারের ভেতরে ৫ কারারক্ষীকে হত্যা"
        },
        {
          name: "Circuit House Killing Field",
          nameBn: "সার্কিট হাউজ বধ্যভূমি",
          location: "Kurigram town",
          locationBn: "কুড়িগ্রাম শহর"
        },
        {
          name: "Hatiar Dagarkuti",
          nameBn: "হাতিয়ার দাগারকুটি",
          location: "Ulipur upazila",
          locationBn: "উলিপুর উপজেলা",
          casualties: 697
        },
        {
          name: "Food Office Killing Field",
          nameBn: "ফুড অফিস বধ্যভূমি",
          location: "Kurigram town",
          locationBn: "কুড়িগ্রাম শহর"
        },
        {
          name: "Riverview High School",
          nameBn: "রিভারভিউ হাইস্কুল বধ্যভূমি",
          location: "Kurigram town",
          locationBn: "কুড়িগ্রাম শহর"
        },
        {
          name: "CO Office Killing Field",
          nameBn: "সিও অফিস বধ্যভূমি",
          location: "Bhurungamari",
          locationBn: "ভুরুঙ্গামারী"
        },
        {
          name: "Judge Court Pond",
          nameBn: "জজ কোর্ট পুকুর বধ্যভূমি",
          location: "In front of Kurigram Judge Court",
          locationBn: "কুড়িগ্রাম জজকোর্টের সামনে"
        },
        {
          name: "Dakbangla Mass Grave",
          nameBn: "ডাকবাংলো গণকবর",
          location: "Ulipur",
          locationBn: "উলিপুর"
        },
        {
          name: "Mondoler Hat Killing Field",
          nameBn: "মণ্ডলের হাট বধ্যভূমি",
          location: "Ulipur",
          locationBn: "উলিপুর"
        },
        {
          name: "Char Berubari Killing Field",
          nameBn: "চর বেরুবাড়ি বধ্যভূমি",
          location: "Nageshwari",
          locationBn: "নাগেশ্বরী"
        },
        {
          name: "Nageshwari Thana School",
          nameBn: "নাগেশ্বরী থানা স্কুল",
          location: "Nageshwari",
          locationBn: "নাগেশ্বরী"
        },
        {
          name: "Kodalkathi Killing Field",
          nameBn: "কোদালকাঠি বধ্যভূমি",
          location: "Rajibpur, island in Brahmaputra River",
          locationBn: "রাজিবপুর, ব্রহ্মপুত্র নদের দ্বীপ"
        },
        {
          name: "Kathalbari Killing Field",
          nameBn: "কাঁঠালবাড়ী বধ্যভূমি",
          location: "8 km from Kurigram town",
          locationBn: "কুড়িগ্রাম শহর থেকে ৮ কিমি দূরে"
        },
        {
          name: "Chilmari Balabari",
          nameBn: "চিলমারী বালাবাড়ি",
          location: "Chilmari",
          locationBn: "চিলমারী"
        },
        {
          name: "Belgacha Killing Field",
          nameBn: "বেলগাছা বধ্যভূমি",
          location: "Kurigram Sadar, Dactorpara",
          locationBn: "কুড়িগ্রাম সদর, ডাক্তারপাড়া"
        },
        {
          name: "Rajarhat Thatmari",
          nameBn: "রাজারহাট ঠাটমারী",
          location: "Rajarhat",
          locationBn: "রাজারহাট"
        }
      ]
    },
    {
      id: 5,
      name: "Kushtia",
      nameBn: "কুষ্টিয়া",
      division: "Khulna",
      divisionBn: "খুলনা",
      siteCount: 7,
      sites: [
        {
          name: "Police Line Killing Field",
          nameBn: "পুলিশলাইন বধ্যভূমি",
          location: "Kushtia Police Line area",
          locationBn: "কুষ্টিয়া পুলিশ লাইন এলাকা"
        },
        {
          name: "Roxy Cinema Alley",
          nameBn: "রক্সি সিনেমা গলি",
          location: "Kushtia town",
          locationBn: "কুষ্টিয়া শহর"
        },
        {
          name: "Gorai River Char",
          nameBn: "গড়াই নদীর চর",
          location: "Sandbar on the banks of Gorai River",
          locationBn: "গড়াই নদীর তীরে বালুচর"
        },
        {
          name: "Housing Estate Killing Field",
          nameBn: "হাউজিং এস্টেট বধ্যভূমি",
          location: "Kushtia Housing Colony area",
          locationBn: "কুষ্টিয়া হাউজিং কলোনি এলাকা"
        },
        {
          name: "Station Road Warehouse",
          nameBn: "স্টেশন রোড মালগুদাম",
          location: "Warehouse No. 1 area",
          locationBn: "১ নং মালগুদাম এলাকা"
        },
        {
          name: "Mahashashan Killing Field",
          nameBn: "মহাশ্মশান বধ্যভূমি",
          location: "Kushtia cremation ground area",
          locationBn: "কুষ্টিয়া মহাশ্মশান এলাকা"
        },
        {
          name: "Jewel Aluminum Factory",
          nameBn: "জুয়েল অ্যালুমিনিয়াম ফ্যাক্টরি",
          location: "Under a tamarind tree",
          locationBn: "একটি তেঁতুল গাছের নিচে"
        }
      ]
    },
    {
      id: 6,
      name: "Khagrachari",
      nameBn: "খাগড়াছড়ি",
      division: "Chittagong",
      divisionBn: "চট্টগ্রাম",
      siteCount: 1,
      sites: [
        {
          name: "Telang Tanga Killing Field",
          nameBn: "তেলাং তাঙ্গা বধ্যভূমি",
          location: "Mahalchari upazila",
          locationBn: "মহালছড়ি উপজেলা"
        }
      ]
    },
    {
      id: 7,
      name: "Khulna",
      nameBn: "খুলনা",
      division: "Khulna",
      divisionBn: "খুলনা",
      siteCount: 15,
      sites: [
        {
          name: "Railway Station Killing Field",
          nameBn: "রেলস্টেশন বধ্যভূমি",
          location: "Center of Khulna city, Station area",
          locationBn: "খুলনা শহরের কেন্দ্রস্থল, স্টেশন এলাকা"
        },
        {
          name: "Rail Colony Pond",
          nameBn: "রেল কলোনি ডোবা",
          location: "Pond adjacent to Rail Colony",
          locationBn: "রেল কলোনি সংলগ্ন ডোবা"
        },
        {
          name: "Forest Ghat Killing Field",
          nameBn: "ফরেস্ট ঘাট বধ্যভূমি",
          location: "Behind Judge Court, on banks of Bhairab River",
          locationBn: "জজকোর্টের পিছনে ভৈরব নদীর তীরে"
        },
        {
          name: "Gallamari Killing Field",
          nameBn: "গল্লামারি বধ্যভূমি",
          location: "Adjacent to Khulna University, main city killing field",
          locationBn: "খুলনা বিশ্ববিদ্যালয় সংলগ্ন, শহরের প্রধান বধ্যভূমি"
        },
        {
          name: "Custom Ghat Killing Field",
          nameBn: "কাষ্টমঘাট বধ্যভূমি",
          location: "Banks of Rupsha River",
          locationBn: "রূপসা নদীর তীরে"
        },
        {
          name: "Crescent Jute Mill",
          nameBn: "ক্রিসেন্ট জুট মিল",
          location: "Khalishpur, banks of Bhairab River",
          locationBn: "খালিশপুর, ভৈরব নদীর তীরে"
        },
        {
          name: "Kantapur Killing Field",
          nameBn: "কান্তপুর বধ্যভূমি",
          location: "Kantapur village, Rupsha upazila",
          locationBn: "রূপসা উপজেলার কান্তপুর গ্রাম"
        },
        {
          name: "Charerhat Killing Field",
          nameBn: "চরেরহাট বধ্যভূমি",
          location: "Daultpur, banks of Bhairab River",
          locationBn: "দৌলতপুর, ভৈরব নদীর তীরে"
        },
        {
          name: "Platinum Jute Mill",
          nameBn: "প্লাটিনাম জুট মিল",
          location: "Bodies burned inside boilers",
          locationBn: "বয়লারের ভেতরে পুড়িয়ে হত্যা করা হতো"
        },
        {
          name: "Newsprint Mill",
          nameBn: "নিউজপ্রিন্ট মিল",
          location: "Khalishpur",
          locationBn: "খালিশপুর"
        },
        {
          name: "Chuknagar Massacre",
          nameBn: "চুকনগর বধ্যভূমি",
          location: "Dumuria, banks of Bhadra River (largest massacre)",
          locationBn: "ডুমুরিয়া, ভদ্রা নদীর তীরে (বৃহত্তম গণহত্যা)",
          casualties: 10000,
          note: "Considered one of the largest single-day massacres"
        },
        {
          name: "Sholua Bazar Killing Field",
          nameBn: "শলুয়া বাজার বধ্যভূমি",
          location: "Dumuria",
          locationBn: "ডুমুরিয়া"
        },
        {
          name: "Azgara Killing Field",
          nameBn: "আজগড়া বধ্যভূমি",
          location: "Rupsha upazila",
          locationBn: "রূপসা উপজেলা"
        },
        {
          name: "Sener Bazar Killing Field",
          nameBn: "সেনের বাজার বধ্যভূমি",
          location: "Rupsha upazila",
          locationBn: "রূপসা উপজেলা"
        },
        {
          name: "Paikgacha Killing Field",
          nameBn: "পাইকগাছা বধ্যভূমি",
          location: "Paikgacha thana",
          locationBn: "পাইকগাছা থানা"
        }
      ]
    },
    {
      id: 8,
      name: "Gazipur",
      nameBn: "গাজীপুর",
      division: "Dhaka",
      divisionBn: "ঢাকা",
      siteCount: 7,
      sites: [
        {
          name: "Tongi Killing Field",
          nameBn: "টঙ্গী বধ্যভূমি",
          location: "Tongi BSCIC area and Shaheed Smriti School",
          locationBn: "টঙ্গী বিসিক এলাকা ও শহীদ স্মৃতি স্কুল"
        },
        {
          name: "Arichpur Killing Field",
          nameBn: "অারিচপুর বধ্যভূমি",
          location: "Tongi",
          locationBn: "টঙ্গী"
        },
        {
          name: "Sripur Killing Field",
          nameBn: "শ্রীপুর বধ্যভূমি",
          location: "Sripur University College field and Satkhaamir",
          locationBn: "শ্রীপুর বিশ্ববিদ্যালয় কলেজ মাঠ ও সাতখামাইর"
        },
        {
          name: "Isarkandi Mass Grave",
          nameBn: "ইছরকান্দি গণকবর",
          location: "Gazipur Sadar",
          locationBn: "গাজীপুর সদর"
        },
        {
          name: "Joydebpur Rajbari",
          nameBn: "জয়দেবপুর রাজবাড়ি",
          location: "Ponds and wells of Bhawal Rajbari",
          locationBn: "ভাওয়াল রাজবাড়ির পুকুর ও কুয়া"
        },
        {
          name: "Kaliganj Killing Field",
          nameBn: "কালীগঞ্জ বধ্যভূমি",
          location: "National Jute Mill area",
          locationBn: "ন্যাশনাল জুট মিল এলাকা"
        },
        {
          name: "Kapasia Killing Field",
          nameBn: "কাপাসিয়া বধ্যভূমি",
          location: "Dashpara in Barun village",
          locationBn: "বরুণ গ্রামের দাসপাড়া"
        }
      ]
    },
    {
      id: 9,
      name: "Gaibandha",
      nameBn: "গাইবান্ধা",
      division: "Rangpur",
      divisionBn: "রংপুর",
      siteCount: 4,
      sites: [
        {
          name: "Stadium Killing Field",
          nameBn: "স্টেডিয়াম বধ্যভূমি",
          location: "Gaibandha Shah Abdul Hamid Stadium",
          locationBn: "গাইবান্ধা শাহ আব্দুল হামিদ স্টেডিয়াম"
        },
        {
          name: "Saghata Sujalpur",
          nameBn: "সাঘাটা সুজালপুর",
          location: "Saghata",
          locationBn: "সাঘাটা"
        },
        {
          name: "Kamarjani Killing Field",
          nameBn: "কামারজানি বধ্যভূমি",
          location: "Banks of Brahmaputra River",
          locationBn: "ব্রহ্মপুত্র নদের তীরে"
        },
        {
          name: "Gobindaganj Katakhali",
          nameBn: "গোবিন্দগঞ্জ কাটাখালি",
          location: "Under Katakhali Bridge",
          locationBn: "কাটাখালি সেতুর নিচে"
        }
      ]
    },
    {
      id: 10,
      name: "Gopalganj",
      nameBn: "গোপালগঞ্জ",
      division: "Dhaka",
      divisionBn: "ঢাকা",
      siteCount: 4,
      sites: [
        {
          name: "Joy Bangla Pond",
          nameBn: "জয় বাংলা পুকুর",
          location: "Adjacent to Upazila Parishad, Mini Cantonment",
          locationBn: "উপজেলা পরিষদ সংলগ্ন মিনি ক্যান্টনমেন্ট"
        },
        {
          name: "Bhatiapara Mass Grave",
          nameBn: "ভাটিয়াপাড়া গণকবর",
          location: "Kashiani upazila",
          locationBn: "কাশিয়ানী উপজেলা"
        },
        {
          name: "Bonbari Killing Field",
          nameBn: "বনবাড়ি বধ্যভূমি",
          location: "Muksudpur",
          locationBn: "মুকসুদপুর"
        },
        {
          name: "Kolabari Killing Field",
          nameBn: "কলাবাড়ি বধ্যভূমি",
          location: "Kotalipara",
          locationBn: "কোটালীপাড়া"
        }
      ]
    },
    {
      id: 11,
      name: "Chattogram",
      nameBn: "চট্টগ্রাম",
      division: "Chittagong",
      divisionBn: "চট্টগ্রাম",
      siteCount: 23,
      sites: [
        {
          name: "Pahartali Killing Field",
          nameBn: "পাহাড়তলী বধ্যভূমি",
          location: "Wireless Colony and Punjabi Line",
          locationBn: "ওয়্যারলেস কলোনি ও পাঞ্জাবি লাইন"
        },
        {
          name: "Ambagan Killing Field",
          nameBn: "আমবাগান বধ্যভূমি",
          location: "Pahartali",
          locationBn: "পাহাড়তলী"
        },
        {
          name: "Foy's Lake Killing Field",
          nameBn: "ফয়জ লেক বধ্যভূমি",
          location: "Remote areas of Foy's Lake",
          locationBn: "ফয়জ লেকের নির্জন এলাকা"
        },
        {
          name: "Shershah Colony",
          nameBn: "শেরশাহ কলোনি",
          location: "Bayezid Bostami area",
          locationBn: "বায়েজিদ বোস্তামী এলাকা"
        },
        {
          name: "Chandgao Killing Field",
          nameBn: "চাঁদগাও বধ্যভূমি",
          location: "Chandgao area",
          locationBn: "চাঁদগাও এলাকা"
        },
        {
          name: "Lalkhan Bazar",
          nameBn: "লালখান বাজার",
          location: "Lalkhan Bazar area",
          locationBn: "লালখান বাজার এলাকা"
        },
        {
          name: "Halishahar Killing Field",
          nameBn: "হালিশহর বধ্যভূমি",
          location: "Nathpara, Halishahar",
          locationBn: "নাথপাড়া, হালিশহর"
        },
        {
          name: "Kalurghat Killing Field",
          nameBn: "কালুরঘাট বধ্যভূমি",
          location: "Kalurghat Bridge and surroundings",
          locationBn: "কালুরঘাট সেতু ও আশপাশ"
        },
        {
          name: "Circuit House Killing Field",
          nameBn: "সার্কিট হাউজ বধ্যভূমি",
          location: "Chattogram Circuit House",
          locationBn: "চট্টগ্রাম সার্কিট হাউজ"
        },
        {
          name: "Mirsarai Killing Field",
          nameBn: "মিরশরাই বধ্যভূমি",
          location: "Various locations in Mirsarai",
          locationBn: "মিরশরাইয়ের বিভিন্ন স্থান"
        },
        {
          name: "Sitakunda Hill",
          nameBn: "সীতাকুণ্ড পাহাড়",
          location: "Chandranath Hill area",
          locationBn: "চন্দ্রনাথ পাহাড় এলাকা"
        },
        {
          name: "Jhautola Killing Field",
          nameBn: "ঝাউতলা বধ্যভূমি",
          location: "Chattogram city",
          locationBn: "চট্টগ্রাম শহর"
        },
        {
          name: "Nasirabad Killing Field",
          nameBn: "নাছিরাবাদ বধ্যভূমি",
          location: "Nasirabad Housing Society",
          locationBn: "নাছিরাবাদ হাউজিং সোসাইটি"
        },
        {
          name: "Shibnath Hill",
          nameBn: "শিবনাথ পাহাড়",
          location: "Sitakunda",
          locationBn: "সীতাকুণ্ড"
        },
        {
          name: "Jorarganj Killing Field",
          nameBn: "জোরারগঞ্জ বধ্যভূমি",
          location: "Mirsarai",
          locationBn: "মিরশরাই"
        },
        {
          name: "West Hinguli",
          nameBn: "পশ্চিম হিঙ্গুলী",
          location: "Mirsarai",
          locationBn: "মিরশরাই"
        },
        {
          name: "Dampara Killing Field",
          nameBn: "দামপাড়া বধ্যভূমি",
          location: "Near Garibullah Shah Mazar",
          locationBn: "গরিবুল্লাহ শাহ মাজারের পাশে"
        },
        {
          name: "Panchlais Killing Field",
          nameBn: "পাঁচলাইশ বধ্যভূমি",
          location: "Near Dumping Depot",
          locationBn: "ডাম্পিং ডিপোর কাছে"
        },
        {
          name: "Kamantila Killing Field",
          nameBn: "কামানটিলা বধ্যভূমি",
          location: "Patenga Airport area",
          locationBn: "পতেঙ্গা বিমানবন্দর এলাকা"
        },
        {
          name: "Borpukurpara Mass Grave",
          nameBn: "বড়পুকুরপাড় গণকবর",
          location: "Banshkhali",
          locationBn: "বাঁশখালী"
        },
        {
          name: "Nathpara Killing Field",
          nameBn: "নাথপাড়া বধ্যভূমি",
          location: "Banshkhali",
          locationBn: "বাঁশখালী"
        },
        {
          name: "Shakpura Killing Field",
          nameBn: "শাকপুরা বধ্যভূমি",
          location: "Boalkhali",
          locationBn: "বোয়ালখালী"
        },
        {
          name: "Unoshottoor Para",
          nameBn: "ঊনসত্তর পাড়া",
          location: "Rauzan",
          locationBn: "রাউজান"
        }
      ]
    },
    {
      id: 12,
      name: "Chandpur",
      nameBn: "চাঁদপুর",
      division: "Chittagong",
      divisionBn: "চট্টগ্রাম",
      siteCount: 6,
      sites: [
        {
          name: "Barstation Killing Field",
          nameBn: "বড়স্টেশন বধ্যভূমি",
          location: "Banks of Meghna River, Molhead area",
          locationBn: "মেঘনা নদীর তীরে, মোলহেড এলাকা"
        },
        {
          name: "Katakhali Bazar",
          nameBn: "কাটাখালী বাজার",
          location: "Haimchar",
          locationBn: "হাইমচর"
        },
        {
          name: "Dakbangla Killing Field",
          nameBn: "ডাকবাংলো বধ্যভূমি",
          location: "Faridganj",
          locationBn: "ফরিদগঞ্জ"
        },
        {
          name: "Nasirkot Killing Field",
          nameBn: "নাসিরকোট বধ্যভূমি",
          location: "Hajiganj",
          locationBn: "হাজীগঞ্জ"
        },
        {
          name: "Meher Rail Station",
          nameBn: "মেহের রেলস্টেশন",
          location: "Shahrasti",
          locationBn: "শাহরাস্তি"
        },
        {
          name: "Chandrakandi Mass Grave",
          nameBn: "চন্দ্রাকান্দি গণকবর",
          location: "Matlab North",
          locationBn: "মতলব উত্তর"
        }
      ]
    },
    {
      id: 13,
      name: "Chapai Nawabganj",
      nameBn: "চাঁপাইনবাবগঞ্জ",
      division: "Rajshahi",
      divisionBn: "রাজশাহী",
      siteCount: 11,
      sites: [
        {
          name: "Shamshanghat Killing Field",
          nameBn: "শ্মশানঘাট বধ্যভূমি",
          location: "Banks of Mahananda River",
          locationBn: "মহানন্দা নদীর তীরে"
        },
        {
          name: "Rehaichar Killing Field",
          nameBn: "রেহাইচর বধ্যভূমি",
          location: "Near the town",
          locationBn: "শহরের কাছে"
        },
        {
          name: "Barogharia Mass Grave",
          nameBn: "বারোঘরিয়া গণকবর",
          location: "Sadar Thana",
          locationBn: "সদর থানা"
        },
        {
          name: "Rohanpur AB School",
          nameBn: "রহনপুর এবি স্কুল",
          location: "Gomastapur",
          locationBn: "গোমস্তাপুর"
        },
        {
          name: "Rohanpur Stationpara",
          nameBn: "রহনপুর স্টেশনপাড়া",
          location: "Gomastapur",
          locationBn: "গোমস্তাপুর"
        },
        {
          name: "Tikarampur",
          nameBn: "টিকারামপুর",
          location: "Gomastapur",
          locationBn: "গোমস্তাপুর"
        },
        {
          name: "Jinarpur Mass Grave",
          nameBn: "জিনারপুর গণকবর",
          location: "Gomastapur",
          locationBn: "গোমস্তাপুর"
        },
        {
          name: "Enayetpur Mass Grave",
          nameBn: "এনায়েতপুর গণকবর",
          location: "Gomastapur",
          locationBn: "গোমস্তাপুর"
        },
        {
          name: "Boalia Mass Grave",
          nameBn: "বোয়ালিয়া গণকবর",
          location: "Gomastapur",
          locationBn: "গোমস্তাপুর"
        },
        {
          name: "Kasimpur Killing Field",
          nameBn: "কাসিমপুর বধ্যভূমি",
          location: "Shibganj",
          locationBn: "শিবগঞ্জ"
        },
        {
          name: "Sonamasjid Mass Grave",
          nameBn: "সোনামসজিদ গণকবর",
          location: "Shibganj",
          locationBn: "শিবগঞ্জ"
        }
      ]
    },
    {
      id: 14,
      name: "Chuadanga",
      nameBn: "চুয়াডাঙ্গা",
      division: "Khulna",
      divisionBn: "খুলনা",
      siteCount: 7,
      sites: [
        {
          name: "Alamdanga Killing Field",
          nameBn: "আলমডাঙ্গা বধ্যভূমি",
          location: "Under Lal Bridge",
          locationBn: "লালব্রিজের নিচে"
        },
        {
          name: "WAPDA Guard Quarter",
          nameBn: "ওয়াপদা গার্ড কোয়ার্টার",
          location: "Alamdanga",
          locationBn: "আলমডাঙ্গা"
        },
        {
          name: "Chuadanga Sadar Hospital",
          nameBn: "চুয়াডাঙ্গা সদর হাসপাতাল",
          location: "Behind the hospital",
          locationBn: "হাসপাতালের পেছনে"
        },
        {
          name: "South Hospital Para",
          nameBn: "দক্ষিণ হাসপাতাল পাড়া",
          location: "Sadar",
          locationBn: "সদর"
        },
        {
          name: "Thana Council Para",
          nameBn: "থানা কাউন্সিল পাড়া",
          location: "Sadar",
          locationBn: "সদর"
        },
        {
          name: "Natudah Killing Field",
          nameBn: "নাটুদহ বধ্যভূমি",
          location: "Damurhuda",
          locationBn: "দামুড়হুদা"
        },
        {
          name: "Dashmile Killing Field",
          nameBn: "দশমাইল বধ্যভূমি",
          location: "Chuadanga-Jhenaidah road",
          locationBn: "চুয়াডাঙ্গা-ঝিনাইদহ সড়ক"
        }
      ]
    },
    {
      id: 15,
      name: "Joypurhat",
      nameBn: "জয়পুরহাট",
      division: "Rajshahi",
      divisionBn: "রাজশাহী",
      siteCount: 6,
      sites: [
        {
          name: "Pagla Dewan Killing Field",
          nameBn: "পাগলা দেওয়ান বধ্যভূমি",
          location: "Joypurhat Sadar (one of the largest killing fields)",
          locationBn: "জয়পুরহাট সদর (অন্যতম বড় বধ্যভূমি)"
        },
        {
          name: "Korai Kadirpur",
          nameBn: "কড়ই কাদিরপুর",
          location: "Sadar upazila",
          locationBn: "সদর উপজেলা",
          casualties: 371
        },
        {
          name: "Degree College Field",
          nameBn: "ডিগ্রি কলেজ মাঠ",
          location: "Joypurhat Government College",
          locationBn: "জয়পুরহাট সরকারি কলেজ"
        },
        {
          name: "Sugar Mill Dome",
          nameBn: "চিনি কল গম্বুজ",
          location: "Joypurhat Sugar Mill",
          locationBn: "জয়পুরহাট সুগার মিল"
        },
        {
          name: "Akkelpur Killing Field",
          nameBn: "আক্কেলপুর বধ্যভূমি",
          location: "Amur field and pond",
          locationBn: "আমুড় মাঠ ও পুকুর"
        },
        {
          name: "Panchbibi Killing Field",
          nameBn: "পাঁচবিবি বধ্যভূমি",
          location: "Panchbibi cattle market and Balighata",
          locationBn: "পাঁচবিবি গো-হাটি ও বালিঘাটা"
        }
      ]
    },
    {
      id: 16,
      name: "Jamalpur",
      nameBn: "জামালপুর",
      division: "Mymensingh",
      divisionBn: "ময়মনসিংহ",
      siteCount: 4,
      sites: [
        {
          name: "Shamshanghat Killing Field",
          nameBn: "শ্মশানঘাট বধ্যভূমি",
          location: "Banks of Brahmaputra River",
          locationBn: "ব্রহ্মপুত্র নদের তীরে"
        },
        {
          name: "PTI Camp",
          nameBn: "পিটিআই ক্যাম্প",
          location: "Jamalpur town",
          locationBn: "জামালপুর শহর"
        },
        {
          name: "Bakshiganj Mass Grave",
          nameBn: "বকশীগঞ্জ গণকবর",
          location: "Bakshiganj",
          locationBn: "বকশীগঞ্জ"
        },
        {
          name: "Ashek Mahmud College",
          nameBn: "আশেক মাহমুদ কলেজ",
          location: "College hostel",
          locationBn: "কলেজের হোস্টেল"
        }
      ]
    },
    {
      id: 17,
      name: "Jhalakathi",
      nameBn: "ঝালকাঠি",
      division: "Barisal",
      divisionBn: "বরিশাল",
      siteCount: 6,
      sites: [
        {
          name: "Sugandha River Killing Field",
          nameBn: "সুগন্ধা নদী বধ্যভূমি",
          location: "Jhalakathi municipal ferry ghat",
          locationBn: "ঝালকাঠি পৌর খেয়াঘাট"
        },
        {
          name: "Gabkhan Killing Field",
          nameBn: "গাবখান বধ্যভূমি",
          location: "Under Gabkhan bridge",
          locationBn: "গাবখান সেতুর নিচে"
        },
        {
          name: "Dumuria Killing Field",
          nameBn: "ডুমুরিয়া বধ্যভূমি",
          location: "Kirtipasha Union",
          locationBn: "কীর্তিপাশা ইউনিয়ন"
        },
        {
          name: "Bhimruli Killing Field",
          nameBn: "ভীমরুলি বধ্যভূমি",
          location: "Kirtipasha",
          locationBn: "কীর্তিপাশা"
        },
        {
          name: "Ramanathpur Killing Field",
          nameBn: "রমানাথপুর বধ্যভূমি",
          location: "Sadar upazila",
          locationBn: "সদর উপজেলা"
        },
        {
          name: "Shatibari Killing Field",
          nameBn: "সটিবাড়ি বধ্যভূমি",
          location: "Rajapur",
          locationBn: "রাজাপুর"
        }
      ]
    },
    {
      id: 18,
      name: "Jhenaidah",
      nameBn: "ঝিনাইদহ",
      division: "Khulna",
      divisionBn: "খুলনা",
      siteCount: 4,
      sites: [
        {
          name: "Cadet College Killing Field",
          nameBn: "ক্যাডেট কলেজ বধ্যভূমি",
          location: "Jhenaidah Cadet College area",
          locationBn: "ঝিনাইদহ ক্যাডেট কলেজ এলাকা"
        },
        {
          name: "Kamanna Mass Grave",
          nameBn: "কামান্না গণকবর",
          location: "Shailkupa",
          locationBn: "শৈলকুপা"
        },
        {
          name: "Kumar River Bridge",
          nameBn: "কুমার নদ সেতু",
          location: "Shailkupa",
          locationBn: "শৈলকুপা"
        },
        {
          name: "Abaipur Mass Grave",
          nameBn: "আবাইপুর গণকবর",
          location: "Shailkupa",
          locationBn: "শৈলকুপা"
        }
      ]
    },
    {
      id: 19,
      name: "Tangail",
      nameBn: "টাঙ্গাইল",
      division: "Dhaka",
      divisionBn: "ঢাকা",
      siteCount: 4,
      sites: [
        {
          name: "Water Tank Killing Field",
          nameBn: "পানির ট্যাঙ্ক বধ্যভূমি",
          location: "District Sadar, behind DC Quarters",
          locationBn: "জেলা সদর, ডিসি কোয়ার্টারের পেছনে"
        },
        {
          name: "Mirzapur Killing Field",
          nameBn: "মির্জাপুর বধ্যভূমি",
          location: "Mirzapur Cadet College and Thana Sadar",
          locationBn: "মির্জাপুর ক্যাডেট কলেজ ও থানা সদর"
        },
        {
          name: "Bangshahi River Killing Field",
          nameBn: "বংশাই নদী বধ্যভূমি",
          location: "Mirzapur",
          locationBn: "মির্জাপুর"
        },
        {
          name: "Nagarpur Killing Field",
          nameBn: "নাগরপুর বধ্যভূমি",
          location: "Nagarpur",
          locationBn: "নাগরপুর"
        }
      ]
    },
    {
      id: 20,
      name: "Thakurgaon",
      nameBn: "ঠাকুরগাঁও",
      division: "Rangpur",
      divisionBn: "রংপুর",
      siteCount: 5,
      sites: [
        {
          name: "Tangon River Killing Field",
          nameBn: "টাঙ্গন নদী বধ্যভূমি",
          location: "Under the old bridge",
          locationBn: "পুরানো সেতুর নিচে"
        },
        {
          name: "Jagtha Killing Field",
          nameBn: "জগথা বধ্যভূমি",
          location: "Pirganj, rice mill area",
          locationBn: "পীরগঞ্জ, রাইস মিল এলাকা"
        },
        {
          name: "Khunia Dighi",
          nameBn: "খুনিয়া দিঘি",
          location: "Ranishankail (one of the largest killing fields)",
          locationBn: "রানীশংকৈল (অন্যতম বৃহত্তম বধ্যভূমি)"
        },
        {
          name: "Deshiapara Killing Field",
          nameBn: "দেশিয়াপাড়া বধ্যভূমি",
          location: "Ranishankail",
          locationBn: "রানীশংকৈল"
        },
        {
          name: "Jathibhanga Killing Field",
          nameBn: "জাঠিভাঙ্গা বধ্যভূমি",
          location: "Sadar upazila",
          locationBn: "সদর উপজেলা",
          casualties: 3000,
          note: "Over 3000 people killed"
        }
      ]
    },
    {
      id: 21,
      name: "Dhaka",
      nameBn: "ঢাকা",
      division: "Dhaka",
      divisionBn: "ঢাকা",
      siteCount: 17,
      sites: [
        {
          name: "Rayerbazar Killing Field",
          nameBn: "রায়েরবাজার বধ্যভূমি",
          location: "Mohammadpur, Beri Bandh area",
          locationBn: "মোহাম্মদপুর, বেড়িবাঁধ এলাকা",
          note: "Major intellectuals killing field"
        },
        {
          name: "Jallad Khana Killing Field",
          nameBn: "জল্লাদখানা বধ্যভূমি",
          location: "Mirpur 10, Benarasi Palli",
          locationBn: "মিরপুর ১০, বেনারসি পল্লী",
          note: "Torture and execution center"
        },
        {
          name: "Mirpur Muslim Bazar",
          nameBn: "মিরপুর মুসলিম বাজার",
          location: "Mirpur No. 12",
          locationBn: "মিরপুর ১২ নম্বর"
        },
        {
          name: "Shyalbari Killing Field",
          nameBn: "শিয়ালবাড়ি বধ্যভূমি",
          location: "Mirpur",
          locationBn: "মিরপুর"
        },
        {
          name: "Harirrampur Killing Field",
          nameBn: "হরিরামপুর বধ্যভূমি",
          location: "Mirpur",
          locationBn: "মিরপুর"
        },
        {
          name: "Jagannath Hall Mass Grave",
          nameBn: "জগন্নাথ হল গণকবর",
          location: "Dhaka University",
          locationBn: "ঢাকা বিশ্ববিদ্যালয়"
        },
        {
          name: "Rokeya Hall Mass Grave",
          nameBn: "রোকেয়া হল গণকবর",
          location: "Dhaka University",
          locationBn: "ঢাকা বিশ্ববিদ্যালয়"
        },
        {
          name: "Ramna Kalibari",
          nameBn: "রমনা কালীবাড়ি",
          location: "Adjacent to Suhrawardy Udyan",
          locationBn: "সোহরাওয়ার্দী উদ্যান সংলগ্ন",
          note: "Hindu temple destroyed, many killed"
        },
        {
          name: "Rajarbag Police Line",
          nameBn: "রাজারবাগ পুলিশ লাইন",
          location: "Police Line area",
          locationBn: "পুলিশ লাইন এলাকা"
        },
        {
          name: "Dholpur Depot",
          nameBn: "ধলপুর ডিপো",
          location: "City Corporation garbage depot",
          locationBn: "সিটি কর্পোরেশনের ময়লার ডিপো"
        },
        {
          name: "Thatari Bazar",
          nameBn: "ঠাটারীবাজার",
          location: "Nawabpur Road",
          locationBn: "নবাবপুর রোড"
        },
        {
          name: "Sutapur Loharpul",
          nameBn: "সূত্রাপুর লোহারপুল",
          location: "Dholaikhal",
          locationBn: "ধোলাইখাল"
        },
        {
          name: "Tejgaon Agricultural Institute",
          nameBn: "তেজগাঁও কৃষি ইনুস্টিটিউট",
          location: "Current Agricultural University area",
          locationBn: "বর্তমান কৃষি বিশ্ববিদ্যালয় এলাকা"
        },
        {
          name: "MNA Hostel",
          nameBn: "এম এন এ হোস্টেল",
          location: "Parliament building area (old)",
          locationBn: "সংসদ ভবন এলাকা (পুরাতন)"
        },
        {
          name: "Jinjira Killing Field",
          nameBn: "জিঞ্জিরা বধ্যভূমি",
          location: "Keraniganj",
          locationBn: "কেরানীগঞ্জ"
        },
        {
          name: "Savar Dairy Farm",
          nameBn: "সাভার ডেইরি ফার্ম",
          location: "Savar",
          locationBn: "সাভার"
        },
        {
          name: "Dhamrai Killing Field",
          nameBn: "ধামরাই বধ্যভূমি",
          location: "Kalampur Bazar and Bangshahi River",
          locationBn: "কালামপুর বাজার ও বংশাই নদী"
        }
      ]
    },
    {
      id: 22,
      name: "Dinajpur",
      nameBn: "দিনাজপুর",
      division: "Rangpur",
      divisionBn: "রংপুর",
      siteCount: 7,
      sites: [
        { name: "Kutibari Killing Field", nameBn: "কুটিবাড়ি বধ্যভূমি", location: "Dinajpur town", locationBn: "দিনাজপুর শহর" },
        { name: "Railway Kitchen", nameBn: "রেলওয়ে কিচেন", location: "Railway Station area", locationBn: "রেলওয়ে স্টেশন এলাকা" },
        { name: "Birol Killing Field", nameBn: "বিরল বধ্যভূমি", location: "Bohla village", locationBn: "বহলা গ্রাম" },
        { name: "Parbatipur Home Signal", nameBn: "পার্বতীপুর হোম সিগন্যাল", location: "Railway Junction area", locationBn: "রেলওয়ে জংশন এলাকা" },
        { name: "Chirirbandar JB School", nameBn: "চিরিরবন্দর জেবি স্কুল", location: "Chirirbandar", locationBn: "চিরিরবন্দর" },
        { name: "Setabganj Killing Field", nameBn: "সেতাবগঞ্জ বধ্যভূমি", location: "Bochaganj", locationBn: "বোচাগঞ্জ" },
        { name: "Chararhat Killing Field", nameBn: "চড়ারহাট বধ্যভূমি", location: "Nawabganj", locationBn: "নবাবগঞ্জ" }
      ]
    },
    {
      id: 23,
      name: "Naogaon",
      nameBn: "নওগাঁ",
      division: "Rajshahi",
      divisionBn: "রাজশাহী",
      siteCount: 7,
      sites: [
        { name: "Pakuria Killing Field", nameBn: "পাকুরিয়া বধ্যভূমি", location: "Manda", locationBn: "মান্দা" },
        { name: "Taj Cinema Hall", nameBn: "তাজ সিনেমা হল", location: "Naogaon Sadar", locationBn: "নওগাঁ সদর" },
        { name: "Balihar Killing Field", nameBn: "বলিহার বধ্যভূমি", location: "Balihar Rajbari area", locationBn: "বলিহার রাজবাড়ি এলাকা" },
        { name: "Dogachi Killing Field", nameBn: "দোগাছি বধ্যভূমি", location: "Sadar upazila", locationBn: "সদর উপজেলা" },
        { name: "Ataikula Mass Grave", nameBn: "আতাইকুলা গণকবর", location: "Raninagar", locationBn: "রানীনগর" },
        { name: "Paharpur Killing Field", nameBn: "পাহাড়পুর বধ্যভূমি", location: "Badalgachi", locationBn: "বদলগাছি" },
        { name: "Hapania Killing Field", nameBn: "হাপানিয়া বধ্যভূমি", location: "Sapahar", locationBn: "সাপাহার" }
      ]
    },
    {
      id: 24,
      name: "Narail",
      nameBn: "নড়াইল",
      division: "Khulna",
      divisionBn: "খুলনা",
      siteCount: 4,
      sites: [
        { name: "Dakbangla Killing Field", nameBn: "ডাকবাংলো বধ্যভূমি", location: "Narail Sadar, banks of Chitra River", locationBn: "নড়াইল সদর, চিত্রা নদীর পাড়" },
        { name: "Launch Ghat Killing Field", nameBn: "লঞ্চঘাট বধ্যভূমি", location: "Banks of Chitra River, Judge Court area", locationBn: "চিত্রা নদীর পাড়, জজ কোর্ট এলাকা" },
        { name: "Water Development Board", nameBn: "পানি উন্নয়ন বোর্ড", location: "Narail Sadar", locationBn: "নড়াইল সদর" },
        { name: "Itna Massacre", nameBn: "ইটনা গণহত্যা", location: "Lohagara", locationBn: "লোহাগড়া", casualties: 39 }
      ]
    },
    {
      id: 25,
      name: "Narsingdi",
      nameBn: "নরসিংদী",
      division: "Dhaka",
      divisionBn: "ঢাকা",
      siteCount: 6,
      sites: [
        { name: "Telephone Exchange", nameBn: "টেলিফোন এক্সচেঞ্জ", location: "Narsingdi town", locationBn: "নরসিংদী শহর" },
        { name: "Panchdona Bridge", nameBn: "পাঁচদোনা সেতু", location: "Panchdona", locationBn: "পাঁচদোনা" },
        { name: "Khatehara Bridge", nameBn: "খাটেহারা সেতু", location: "Tarabo road", locationBn: "তারাবো সড়ক" },
        { name: "Putia Killing Field", nameBn: "পুটিয়া বধ্যভূমি", location: "Shibpur", locationBn: "শিবপুর" },
        { name: "Ghasirdia Killing Field", nameBn: "ঘাসিরদিয়া বধ্যভূমি", location: "Shibpur", locationBn: "শিবপুর" },
        { name: "Belabo Killing Field", nameBn: "বেলাব বধ্যভূমি", location: "Banks of Arial Khan River", locationBn: "আড়িয়াল খাঁ নদীর তীর" }
      ]
    },
    {
      id: 26,
      name: "Natore",
      nameBn: "নাটোর",
      division: "Rajshahi",
      divisionBn: "রাজশাহী",
      siteCount: 6,
      sites: [
        { name: "Phulbagan Killing Field", nameBn: "ফুলবাগান বধ্যভূমি", location: "Natore Rajbari/town area", locationBn: "নাটোর রাজবাড়ি/শহর এলাকা" },
        { name: "Chhatni Mass Grave", nameBn: "ছাতনী গণকবর", location: "Sadar upazila", locationBn: "সদর উপজেলা" },
        { name: "Gopalpur Sugar Mill", nameBn: "গোপালপুর সুগারমিল", location: "Lalpur (Shahid Sagar)", locationBn: "লালপুর (শহীদ সাগর)" },
        { name: "Baura Rail Bridge", nameBn: "বাউড়া রেল ব্রিজ", location: "Lalpur", locationBn: "লালপুর" },
        { name: "Moyna Mass Grave", nameBn: "ময়না গণকবর", location: "Lalpur", locationBn: "লালপুর" },
        { name: "Dattapara Killing Field", nameBn: "দত্তপাড়া বধ্যভূমি", location: "Natore Sadar", locationBn: "নাটোর সদর" }
      ]
    },
    {
      id: 27,
      name: "Narayanganj",
      nameBn: "নারায়ণগঞ্জ",
      division: "Dhaka",
      divisionBn: "ঢাকা",
      siteCount: 5,
      sites: [
        { name: "Fatulla Killing Field", nameBn: "ফতুল্লা বধ্যভূমি", location: "Panchabati, Hariharpara", locationBn: "পঞ্চবটি, হরিহরপাড়া" },
        { name: "Shimrail Killing Field", nameBn: "শিমরাইল বধ্যভূমি", location: "Siddhirganj", locationBn: "সিদ্ধিরগঞ্জ" },
        { name: "Adamjee Killing Field", nameBn: "আদমজী বধ্যভূমি", location: "Inside and outside Adamjee Jute Mill", locationBn: "আদমজী জুট মিলের ভেতর ও বাইরে" },
        { name: "Bandar Ferry Ghat", nameBn: "বন্দর খেয়াঘাট", location: "East bank of Shitalakshya River", locationBn: "শীতলক্ষ্যা নদীর পূর্ব পাড়" },
        { name: "Boktaboli Massacre", nameBn: "বক্তাবলী গণহত্যা", location: "Boktaboli Pargana", locationBn: "বক্তাবলী পরগনা" }
      ]
    },
    {
      id: 28,
      name: "Nilphamari",
      nameBn: "নীলফামারী",
      division: "Rangpur",
      divisionBn: "রংপুর",
      siteCount: 5,
      sites: [
        { name: "Saidpur Cantonment", nameBn: "সৈয়দপুর ক্যান্টনমেন্ট", location: "Golahat killing field (train killings)", locationBn: "গোলাহাট বধ্যভূমি (ট্রেনে হত্যা)" },
        { name: "Saidpur Railway Workshop", nameBn: "সৈয়দপুর রেলওয়ে কারখানা", location: "Inside and outside the workshop", locationBn: "কারখানার ভেতরে ও বাইরে" },
        { name: "Balakhana Killing Field", nameBn: "বালাখানা বধ্যভূমি", location: "Adjacent to Rangpur Cantonment", locationBn: "রংপুর ক্যান্টনমেন্ট সংলগ্ন" },
        { name: "Dimla Killing Field", nameBn: "ডিমলা বধ্যভূমি", location: "Dimla and Jaldhaka", locationBn: "ডিমলা ও জলঢাকা" },
        { name: "Jharuar Bil", nameBn: "ঝাড়ুয়ার বিল", location: "Saidpur", locationBn: "সৈয়দপুর" }
      ]
    },
    {
      id: 29,
      name: "Netrokona",
      nameBn: "নেত্রকোনা",
      division: "Mymensingh",
      divisionBn: "ময়মনসিংহ",
      siteCount: 5,
      sites: [
        { name: "Jaria Killing Field", nameBn: "জারিয়া বধ্যভূমি", location: "Purbadhala, banks of Kangsha River", locationBn: "পূর্বধলা, কংস নদের তীর" },
        { name: "Moktarpara Bridge", nameBn: "মোক্তারপাড়া সেতু", location: "Mogra River bridge", locationBn: "মগড়া নদীর ব্রিজ" },
        { name: "Birishiri Killing Field", nameBn: "বিরিশিরি বধ্যভূমি", location: "Durgapur", locationBn: "দুর্গাপুর" },
        { name: "Kalmakanda Killing Field", nameBn: "কলমাকান্দা বধ্যভূমি", location: "Banks of Ubdhakhali River", locationBn: "উবধাখালি নদীর পাড়" },
        { name: "Barhatta Killing Field", nameBn: "বারহাট্টা বধ্যভূমি", location: "Barhatta", locationBn: "বারহাট্টা" }
      ]
    },
    {
      id: 30,
      name: "Noakhali",
      nameBn: "নোয়াখালী",
      division: "Chittagong",
      divisionBn: "চট্টগ্রাম",
      siteCount: 4,
      sites: [
        { name: "Sonapur Killing Field", nameBn: "সোনাপুর বধ্যভূমি", location: "Sonapur and Sripur", locationBn: "সোনাপুর ও শ্রীপুর" },
        { name: "PTI Killing Field", nameBn: "পিটিআই বধ্যভূমি", location: "Maijdee", locationBn: "মাইজদী" },
        { name: "Begumganj Technical", nameBn: "বেগমগঞ্জ টেকনিক্যাল", location: "Begumganj Chowrasta", locationBn: "বেগমগঞ্জ চৌরাস্তা" },
        { name: "Kalapol Killing Field", nameBn: "কালাপোল বধ্যভূমি", location: "Begumganj", locationBn: "বেগমগঞ্জ" }
      ]
    },
    {
      id: 31,
      name: "Panchagarh",
      nameBn: "পঞ্চগড়",
      division: "Rangpur",
      divisionBn: "রংপুর",
      siteCount: 3,
      sites: [
        { name: "Dhakkamara Killing Field", nameBn: "ধাক্কামারা বধ্যভূমি", location: "Panchagarh Sadar, banks of Karatoya River", locationBn: "পঞ্চগড় সদর, করতোয়া নদীর তীর" },
        { name: "Chapchup Bil", nameBn: "চাপচুপ বিল", location: "Boda upazila", locationBn: "বোদা উপজেলা" },
        { name: "Mirzapur Killing Field", nameBn: "মির্জাপুর বধ্যভূমি", location: "Atwari", locationBn: "আটোয়ারী" }
      ]
    },
    {
      id: 32,
      name: "Patuakhali",
      nameBn: "পটুয়াখালী",
      division: "Barisal",
      divisionBn: "বরিশাল",
      siteCount: 4,
      sites: [
        { name: "Old Jail", nameBn: "পুরাতন জেলখানা", location: "Inside and outside the jail", locationBn: "জেলখানার ভেতরে ও বাইরে" },
        { name: "WAPDA Colony", nameBn: "ওয়াপদা কলোনি", location: "Patuakhali town", locationBn: "পটুয়াখালী শহর" },
        { name: "Itabaria Massacre", nameBn: "ইটাবাড়িয়া গণহত্যা", location: "Patuakhali Sadar", locationBn: "পটুয়াখালী সদর" },
        { name: "Galachipa Killing Field", nameBn: "গলাচিপা বধ্যভূমি", location: "Panpatti area", locationBn: "পানপট্টি এলাকা" }
      ]
    },
    {
      id: 33,
      name: "Pabna",
      nameBn: "পাবনা",
      division: "Rajshahi",
      divisionBn: "রাজশাহী",
      siteCount: 5,
      sites: [
        { name: "Santhia Killing Field", nameBn: "সাঁথিয়া বধ্যভূমি", location: "Dab Bagan and Koromja", locationBn: "ডাব বাগান ও করমজা" },
        { name: "Ishwardi Killing Field", nameBn: "ঈশ্বরদী বধ্যভূমি", location: "Paksey Hardinge Bridge and Railway Locoshed", locationBn: "পাকশী হার্ডিঞ্জ ব্রিজ ও রেলওয়ে লোকোশেড" },
        { name: "Nurpur Killing Field", nameBn: "নূরপুর বধ্যভূমি", location: "Pabna Sadar, Power House area", locationBn: "পাবনা সদর, পাওয়ার হাউজ এলাকা" },
        { name: "Hadol Killing Field", nameBn: "হাদল বধ্যভূমি", location: "Faridpur upazila", locationBn: "ফরিদপুর উপজেলা" },
        { name: "Nagarbari Ghat", nameBn: "নগরবাড়ি ঘাট", location: "Banks of Jamuna River", locationBn: "যমুনা নদীর তীর" }
      ]
    },
    {
      id: 34,
      name: "Pirojpur",
      nameBn: "পিরোজপুর",
      division: "Barisal",
      divisionBn: "বরিশাল",
      siteCount: 3,
      sites: [
        { name: "Baleshwar Ferry Ghat", nameBn: "বলেশ্বর খেয়াঘাট", location: "Banks of Baleshwar River", locationBn: "বলেশ্বর নদীর তীর" },
        { name: "Swarupkathi Killing Field", nameBn: "স্বরূপকাঠি বধ্যভূমি", location: "Swarupkathi (Nesarabad)", locationBn: "স্বরূপকাঠি (নেছারাবাদ)" },
        { name: "Mathbaria Killing Field", nameBn: "মঠবাড়িয়া বধ্যভূমি", location: "Mirukhali and Sapleja", locationBn: "মিরুখালী ও সাপলেজা" }
      ]
    },
    {
      id: 35,
      name: "Faridpur",
      nameBn: "ফরিদপুর",
      division: "Dhaka",
      divisionBn: "ঢাকা",
      siteCount: 4,
      sites: [
        { name: "Stadium Killing Field", nameBn: "স্টেডিয়াম বধ্যভূমি", location: "Faridpur Stadium", locationBn: "ফরিদপুর স্টেডিয়াম" },
        { name: "Alipur Killing Field", nameBn: "আলিপুর বধ্যভূমি", location: "Shahartoli", locationBn: "শহরতলী" },
        { name: "Nagarkanda Killing Field", nameBn: "নগরকান্দা বধ্যভূমি", location: "Nagarkanda", locationBn: "নগরকান্দা" },
        { name: "Bhanga Killing Field", nameBn: "ভাঙ্গা বধ্যভূমি", location: "Bhanga Thana", locationBn: "ভাঙ্গা থানা" }
      ]
    },
    {
      id: 36,
      name: "Feni",
      nameBn: "ফেনী",
      division: "Chittagong",
      divisionBn: "চট্টগ্রাম",
      siteCount: 4,
      sites: [
        { name: "Feni College Killing Field", nameBn: "ফেনী কলেজ বধ্যভূমি", location: "College field and Old Airport", locationBn: "কলেজ মাঠ ও ওল্ড এয়ারপোর্ট" },
        { name: "Daganbhuiya Killing Field", nameBn: "দাগনভূঞা বধ্যভূমি", location: "Daganbhuiya Bazar", locationBn: "দাগনভূঞা বাজার" },
        { name: "Silonia Killing Field", nameBn: "সিলোনিয়া বধ্যভূমি", location: "Silonia High School field", locationBn: "সিলোনিয়া হাইস্কুল মাঠ" },
        { name: "Parshuram Killing Field", nameBn: "পরশুরাম বধ্যভূমি", location: "Parshuram", locationBn: "পরশুরাম" }
      ]
    },
    {
      id: 37,
      name: "Bogra",
      nameBn: "বগুড়া",
      division: "Rajshahi",
      divisionBn: "রাজশাহী",
      siteCount: 4,
      sites: [
        { name: "Aria Bazar", nameBn: "আড়িয়া বাজার", location: "Gabtali", locationBn: "গাবতলী" },
        { name: "Railway Station", nameBn: "রেল স্টেশন", location: "Bogra Sadar", locationBn: "বগুড়া সদর" },
        { name: "Matidali Killing Field", nameBn: "মাটিডালি বধ্যভূমি", location: "Bogra town", locationBn: "বগুড়া শহর" },
        { name: "Sariakandi", nameBn: "সারিয়াকান্দি", location: "Char of Jamuna River", locationBn: "যমুনা নদীর চর" }
      ]
    },
    {
      id: 38,
      name: "Barguna",
      nameBn: "বরগুনা",
      division: "Barisal",
      divisionBn: "বরিশাল",
      siteCount: 3,
      sites: [
        { name: "Jail Killing Field", nameBn: "জেলখানা বধ্যভূমি", location: "Barguna Jail and Bishkhali River", locationBn: "বরগুনা জেলখানা ও বিষখালী নদী" },
        { name: "Pathorghata Killing Field", nameBn: "পাথরঘাটা বধ্যভূমি", location: "Pathorghata Khal", locationBn: "পাথরঘাটা খাল" },
        { name: "Betagi Killing Field", nameBn: "বেতাগী বধ্যভূমি", location: "Betagi", locationBn: "বেতাগী" }
      ]
    },
    {
      id: 39,
      name: "Barisal",
      nameBn: "বরিশাল",
      division: "Barisal",
      divisionBn: "বরিশাল",
      siteCount: 4,
      sites: [
        { name: "WAPDA Killing Field", nameBn: "ওয়াপদা বধ্যভূমি", location: "Sagardi, Barisal town", locationBn: "সাগরদী, বরিশাল শহর" },
        { name: "Kirtankhola Killing Field", nameBn: "কীর্তনখোলা বধ্যভূমি", location: "River bank and Steamer Ghat", locationBn: "নদীর পাড় ও স্টিমার ঘাট" },
        { name: "Gournadi Killing Field", nameBn: "গৌরনদী বধ্যভূমি", location: "Gournadi College and surroundings", locationBn: "গৌরনদী কলেজ ও আশপাশ" },
        { name: "Agailjhara", nameBn: "আগৈলঝাড়া", location: "Poysarhat", locationBn: "পয়সারহাট" }
      ]
    },
    {
      id: 40,
      name: "Bagerhat",
      nameBn: "বাগেরহাট",
      division: "Khulna",
      divisionBn: "খুলনা",
      siteCount: 4,
      sites: [
        { name: "Dakra Massacre", nameBn: "ডাকরা গণহত্যা", location: "Rampal", locationBn: "রামপাল", note: "Thousands killed" },
        { name: "Chitalmari Killing Field", nameBn: "চিতলমারী বধ্যভূমি", location: "Chitalmari Bazar", locationBn: "চিতলমারী বাজার" },
        { name: "Morrelganj Killing Field", nameBn: "মোড়েলগঞ্জ বধ্যভূমি", location: "Morrelganj Bazar and Ferry Ghat", locationBn: "মোড়েলগঞ্জ বাজার ও ফেরিঘাট" },
        { name: "Kachua Killing Field", nameBn: "কচুয়া বধ্যভূমি", location: "Kachua", locationBn: "কচুয়া" }
      ]
    },
    {
      id: 41,
      name: "Bandarban",
      nameBn: "বান্দরবান",
      division: "Chittagong",
      divisionBn: "চট্টগ্রাম",
      siteCount: 1,
      sites: [
        { name: "Ruma and Rowangchhari", nameBn: "রুমা ও রোয়াংছড়ি", location: "Banks of Sangu River", locationBn: "সাঙ্গু নদীর তীর" }
      ]
    },
    {
      id: 42,
      name: "Brahmanbaria",
      nameBn: "ব্রাহ্মণবাড়িয়া",
      division: "Chittagong",
      divisionBn: "চট্টগ্রাম",
      siteCount: 4,
      sites: [
        { name: "Kurulia Khal", nameBn: "কুরুলিয়া খাল", location: "Brahmanbaria Sadar", locationBn: "ব্রাহ্মণবাড়িয়া সদর" },
        { name: "Poirtola Killing Field", nameBn: "পৈরতলা বধ্যভূমি", location: "Adjacent to railway line", locationBn: "রেললাইন সংলগ্ন" },
        { name: "Ashuganj Killing Field", nameBn: "আশুগঞ্জ বধ্যভূমি", location: "Banks of Meghna River and Silo", locationBn: "মেঘনা নদীর তীর ও সাইলো" },
        { name: "Akhaura Killing Field", nameBn: "আখাউড়া বধ্যভূমি", location: "Adjacent to Khorompur Mazar and Gangasagar", locationBn: "খরমপুর মাজার সংলগ্ন ও গঙ্গাসাগর" }
      ]
    },
    {
      id: 43,
      name: "Bhola",
      nameBn: "ভোলা",
      division: "Barisal",
      divisionBn: "বরিশাল",
      siteCount: 3,
      sites: [
        { name: "WAPDA Colony", nameBn: "ওয়াপদা কলোনি", location: "Bhola town", locationBn: "ভোলা শহর" },
        { name: "Ferry Ghat Killing Field", nameBn: "খেয়াঘাট বধ্যভূমি", location: "Bhola Khal", locationBn: "ভোলা খাল" },
        { name: "Borhanuddin", nameBn: "বোরহানউদ্দিন", location: "Borhanuddin Thana area", locationBn: "বোরহানউদ্দিন থানা এলাকা" }
      ]
    },
    {
      id: 44,
      name: "Mymensingh",
      nameBn: "ময়মনসিংহ",
      division: "Mymensingh",
      divisionBn: "ময়মনসিংহ",
      siteCount: 4,
      sites: [
        { name: "Agricultural University", nameBn: "কৃষি বিশ্ববিদ্যালয়", location: "University campus and Brahmaputra River", locationBn: "বিশ্ববিদ্যালয় চত্বর ও ব্রহ্মপুত্র নদ" },
        { name: "Shambhuganj Killing Field", nameBn: "শম্ভুগঞ্জ বধ্যভূমি", location: "Shambhuganj Bridge area", locationBn: "শম্ভুগঞ্জ ব্রিজ এলাকা" },
        { name: "Muktagacha", nameBn: "মুক্তাগাছা", location: "Zamindar Bari and Satrashia", locationBn: "জমিদার বাড়ি ও সত্রাশিয়া" },
        { name: "Nandail", nameBn: "নান্দাইল", location: "Baruigram", locationBn: "বারুইগ্রাম" }
      ]
    },
    {
      id: 45,
      name: "Magura",
      nameBn: "মাগুরা",
      division: "Khulna",
      divisionBn: "খুলনা",
      siteCount: 3,
      sites: [
        { name: "PTI Killing Field", nameBn: "পিটিআই বধ্যভূমি", location: "Magura Sadar", locationBn: "মাগুরা সদর" },
        { name: "Nabaganga River", nameBn: "নবগঙ্গা নদী", location: "River ghat area", locationBn: "নদীর ঘাট এলাকা" },
        { name: "Sripur Killing Field", nameBn: "শ্রীপুর বধ্যভূমি", location: "Sripur Bahini Office", locationBn: "শ্রীপুর বাহিনী অফিস" }
      ]
    },
    {
      id: 46,
      name: "Madaripur",
      nameBn: "মাদারীপুর",
      division: "Dhaka",
      divisionBn: "ঢাকা",
      siteCount: 3,
      sites: [
        { name: "AR Howladar Jute Mill", nameBn: "এ আর হাওলাদার জুট মিল", location: "Inside the jute mill", locationBn: "জুট মিলের ভেতরে" },
        { name: "Shakuni Lake", nameBn: "শকুনী লেক", location: "Madaripur town", locationBn: "মাদারীপুর শহর" },
        { name: "Sendia Massacre", nameBn: "সেনদিয়া গণহত্যা", location: "Rajoir", locationBn: "রাজৈর" }
      ]
    },
    {
      id: 47,
      name: "Manikganj",
      nameBn: "মানিকগঞ্জ",
      division: "Dhaka",
      divisionBn: "ঢাকা",
      siteCount: 4,
      sites: [
        { name: "Saturia Killing Field", nameBn: "সাটুরিয়া বধ্যভূমি", location: "Saturia", locationBn: "সাটুরিয়া" },
        { name: "Tara Ghat Killing Field", nameBn: "তরা ঘাট বধ্যভূমি", location: "Kaliganga River", locationBn: "কালিগঙ্গা নদী" },
        { name: "PTI Killing Field", nameBn: "পিটিআই বধ্যভূমি", location: "Manikganj town", locationBn: "মানিকগঞ্জ শহর" },
        { name: "Barangail Killing Field", nameBn: "বরংগাইল বধ্যভূমি", location: "Ghior", locationBn: "ঘিওর" }
      ]
    },
    {
      id: 48,
      name: "Munshiganj",
      nameBn: "মুন্সীগঞ্জ",
      division: "Dhaka",
      divisionBn: "ঢাকা",
      siteCount: 3,
      sites: [
        { name: "Keoar Killing Field", nameBn: "কেওয়ার বধ্যভূমি", location: "Sadar upazila", locationBn: "সদর উপজেলা" },
        { name: "Bhoberchar Killing Field", nameBn: "ভবেরচর বধ্যভূমি", location: "Gazaria", locationBn: "গজারিয়া" },
        { name: "C&B Ghat", nameBn: "সিঅ্যান্ডবি ঘাট", location: "Gazaria", locationBn: "গজারিয়া" }
      ]
    },
    {
      id: 49,
      name: "Meherpur",
      nameBn: "মেহেরপুর",
      division: "Khulna",
      divisionBn: "খুলনা",
      siteCount: 3,
      sites: [
        { name: "Meherpur College", nameBn: "মেহেরপুর কলেজ", location: "Mango orchard behind the college", locationBn: "কলেজের পেছনের আমবাগান" },
        { name: "WAPDA Mor", nameBn: "ওয়াপদা মোড়", location: "Meherpur-Chuadanga road", locationBn: "মেহেরপুর-চুয়াডাঙ্গা সড়ক" },
        { name: "Bhatpara Nilkuthi", nameBn: "ভাটপাড়া নীলকুঠি", location: "Gangni", locationBn: "গাংনী" }
      ]
    },
    {
      id: 50,
      name: "Moulvibazar",
      nameBn: "মৌলভীবাজার",
      division: "Sylhet",
      divisionBn: "সিলেট",
      siteCount: 5,
      sites: [
        { name: "Shamshernagar Killing Field", nameBn: "শমশেরনগর বধ্যভূমি", location: "Airport area", locationBn: "বিমানবন্দর এলাকা" },
        { name: "Panchgaon Massacre", nameBn: "পাঁচগাঁও গণহত্যা", location: "Rajnagar", locationBn: "রাজনগর", casualties: 59 },
        { name: "Bharaura Killing Field", nameBn: "ভাড়াউড়া বধ্যভূমি", location: "Srimangal", locationBn: "শ্রীমঙ্গল" },
        { name: "Dhorkapon Killing Field", nameBn: "ধরকাপন বধ্যভূমি", location: "Kulaura", locationBn: "কুলাউড়া" },
        { name: "Juri Killing Field", nameBn: "জুড়ি বধ্যভূমি", location: "Juri", locationBn: "জুড়ি" }
      ]
    },
    {
      id: 51,
      name: "Jessore",
      nameBn: "যশোর",
      division: "Khulna",
      divisionBn: "খুলনা",
      siteCount: 4,
      sites: [
        { name: "Shankarpur Killing Field", nameBn: "শংকরপুর বধ্যভূমি", location: "Jessore town", locationBn: "যশোর শহর" },
        { name: "Jhikargacha Killing Field", nameBn: "ঝিকরগাছা বধ্যভূমি", location: "Jhikargacha Bazar and Bridge", locationBn: "ঝিকরগাছা বাজার ও ব্রিজ" },
        { name: "Sharsha and Benapole", nameBn: "শার্শা ও বেনাপোল", location: "Kagajpukur and Navaron", locationBn: "কাগজপুকুর ও নাভারন" },
        { name: "Chougachha Killing Field", nameBn: "চৌগাছা বধ্যভূমি", location: "Chougachha", locationBn: "চৌগাছা" }
      ]
    },
    {
      id: 52,
      name: "Rangpur",
      nameBn: "রংপুর",
      division: "Rangpur",
      divisionBn: "রংপুর",
      siteCount: 6,
      sites: [
        { name: "Town Hall Killing Field", nameBn: "টাউন হল বধ্যভূমি", location: "Rangpur town", locationBn: "রংপুর শহর" },
        { name: "Nisbetganj Killing Field", nameBn: "নিসবেতগঞ্জ বধ্যভূমি", location: "Near Rangpur Cantonment", locationBn: "রংপুর সেনানিবাসের কাছে" },
        { name: "Domdoma Killing Field", nameBn: "দমদমা বধ্যভূমি", location: "Domdoma Bridge", locationBn: "দমদমা ব্রিজ" },
        { name: "Dokhiganj Crematorium", nameBn: "দখিগঞ্জ শ্মশান", location: "Rangpur town", locationBn: "রংপুর শহর" },
        { name: "Sahebganj Killing Field", nameBn: "সাহেবগঞ্জ বধ্যভূমি", location: "Haragachh Road", locationBn: "হারাগাছ রোড" },
        { name: "Lahirirhat Killing Field", nameBn: "লাহিড়ীরহাট বধ্যভূমি", location: "Sadar upazila", locationBn: "সদর উপজেলা" }
      ]
    },
    {
      id: 53,
      name: "Rangamati",
      nameBn: "রাঙ্গামাটি",
      division: "Chittagong",
      divisionBn: "চট্টগ্রাম",
      siteCount: 2,
      sites: [
        { name: "Manikchhari Killing Field", nameBn: "মানিকছড়ি বধ্যভূমি", location: "Manikchhari", locationBn: "মানিকছড়ি" },
        { name: "Notun Court Killing Field", nameBn: "নতুন কোর্ট বধ্যভূমি", location: "Rangamati town", locationBn: "রাঙ্গামাটি শহর" }
      ]
    },
    {
      id: 54,
      name: "Rajbari",
      nameBn: "রাজবাড়ী",
      division: "Dhaka",
      divisionBn: "ঢাকা",
      siteCount: 3,
      sites: [
        { name: "Goalanda Killing Field", nameBn: "গোয়ালন্দ বধ্যভূমি", location: "Banks of Padma River", locationBn: "পদ্মার পাড়" },
        { name: "Locoshed Killing Field", nameBn: "লোকোশেড বধ্যভূমি", location: "Rajbari Railway", locationBn: "রাজবাড়ী রেলওয়ে" },
        { name: "Bhandaria Killing Field", nameBn: "ভাণ্ডারিয়া বধ্যভূমি", location: "Rajbari Sadar", locationBn: "রাজবাড়ী সদর" }
      ]
    },
    {
      id: 55,
      name: "Rajshahi",
      nameBn: "রাজশাহী",
      division: "Rajshahi",
      divisionBn: "রাজশাহী",
      siteCount: 5,
      sites: [
        { name: "Joha Hall Killing Field", nameBn: "জোহা হল বধ্যভূমি", location: "Rajshahi University", locationBn: "রাজশাহী বিশ্ববিদ্যালয়" },
        { name: "Bablabon Killing Field", nameBn: "বাবলাবন বধ্যভূমি", location: "Banks of Padma River", locationBn: "পদ্মার তীর" },
        { name: "Upashahar Killing Field", nameBn: "উপশহর বধ্যভূমি", location: "Satellite Town", locationBn: "স্যাটেলাইট টাউন" },
        { name: "Gogonbaria", nameBn: "গগনবাড়িয়া", location: "Paba upazila", locationBn: "পবা উপজেলা" },
        { name: "Raninagar Killing Field", nameBn: "রানীনগর বধ্যভূমি", location: "Rajshahi town", locationBn: "রাজশাহী শহর" }
      ]
    },
    {
      id: 56,
      name: "Lakshmipur",
      nameBn: "লক্ষ্মীপুর",
      division: "Chittagong",
      divisionBn: "চট্টগ্রাম",
      siteCount: 3,
      sites: [
        { name: "Madam Bridge Killing Field", nameBn: "মাদাম ব্রিজ বধ্যভূমি", location: "Lakshmipur-Begumganj road", locationBn: "লক্ষ্মীপুর-বেগমগঞ্জ সড়ক" },
        { name: "Bashabari Killing Field", nameBn: "বাসাবাড়ি বধ্যভূমি", location: "Ramganj", locationBn: "রামগঞ্জ" },
        { name: "Piarapur Bridge", nameBn: "পিয়ারাপুর ব্রিজ", location: "Raipur", locationBn: "রায়পুর" }
      ]
    },
    {
      id: 57,
      name: "Lalmonirhat",
      nameBn: "লালমনিরহাট",
      division: "Rangpur",
      divisionBn: "রংপুর",
      siteCount: 3,
      sites: [
        { name: "Railway Killing Field", nameBn: "রেলওয়ে বধ্যভূমি", location: "Lalmonirhat Railway Station and Locoshed", locationBn: "লালমনিরহাট রেলওয়ে স্টেশন ও লোকোশেড" },
        { name: "Tista Bridge Killing Field", nameBn: "তিস্তা ব্রিজ বধ্যভূমি", location: "Banks of Tista River", locationBn: "তিস্তা পাড়" },
        { name: "Borokhata Killing Field", nameBn: "বড়খাতা বধ্যভূমি", location: "Hatibandha", locationBn: "হাতীবান্ধা" }
      ]
    },
    {
      id: 58,
      name: "Shariatpur",
      nameBn: "শরীয়তপুর",
      division: "Dhaka",
      divisionBn: "ঢাকা",
      siteCount: 3,
      sites: [
        { name: "Mazar Killing Field", nameBn: "মাজার বধ্যভূমি", location: "Shariatpur Sadar", locationBn: "শরীয়তপুর সদর" },
        { name: "Bhedarganj Killing Field", nameBn: "ভেদরগঞ্জ বধ্যভূমি", location: "Bhedarganj", locationBn: "ভেদরগঞ্জ" },
        { name: "Monohor Bazar", nameBn: "মনোহর বাজার", location: "Sadar upazila", locationBn: "সদর উপজেলা" }
      ]
    },
    {
      id: 59,
      name: "Sherpur",
      nameBn: "শেরপুর",
      division: "Mymensingh",
      divisionBn: "ময়মনসিংহ",
      siteCount: 3,
      sites: [
        { name: "Sohagpur Massacre", nameBn: "সোহাগপুর গণহত্যা", location: "Nalitabari (Widow Village)", locationBn: "নালিতাবাড়ী (বিধবা পল্লী)" },
        { name: "Surjodi Killing Field", nameBn: "সুর্যদী বধ্যভূমি", location: "Sherpur Sadar", locationBn: "শেরপুর সদর" },
        { name: "Ahmednagar Killing Field", nameBn: "আহমদনগর বধ্যভূমি", location: "Jhenaigati", locationBn: "ঝিনাইগাতী" }
      ]
    },
    {
      id: 60,
      name: "Satkhira",
      nameBn: "সাতক্ষীরা",
      division: "Khulna",
      divisionBn: "খুলনা",
      siteCount: 4,
      sites: [
        { name: "Jhaudanga Killing Field", nameBn: "ঝাউডাঙ্গা বধ্যভূমি", location: "Satkhira Sadar", locationBn: "সাতক্ষীরা সদর" },
        { name: "Bokchora Killing Field", nameBn: "বকচরা বধ্যভূমি", location: "Satkhira Sadar", locationBn: "সাতক্ষীরা সদর" },
        { name: "Bankal Killing Field", nameBn: "বাঁকাল বধ্যভূমি", location: "Satkhira town", locationBn: "সাতক্ষীরা শহর" },
        { name: "Ashashuni Killing Field", nameBn: "আশাশুনি বধ্যভূমি", location: "Ashashuni", locationBn: "আশাশুনি" }
      ]
    },
    {
      id: 61,
      name: "Sylhet",
      nameBn: "সিলেট",
      division: "Sylhet",
      divisionBn: "সিলেট",
      siteCount: 5,
      sites: [
        { name: "Cadet College Killing Field", nameBn: "ক্যাডেট কলেজ বধ্যভূমি", location: "Sylhet Cadet College area", locationBn: "সিলেট ক্যাডেট কলেজ এলাকা" },
        { name: "MC College Killing Field", nameBn: "এমসি কলেজ বধ্যভূমি", location: "MC College hostel", locationBn: "এমসি কলেজ ছাত্রাবাস" },
        { name: "Khadimnagar Killing Field", nameBn: "খাদিমনগর বধ্যভূমি", location: "Tea garden area", locationBn: "চা বাগান এলাকা" },
        { name: "Malnicharra Tea Garden", nameBn: "মালনিছড়া চা বাগান", location: "Sylhet suburb", locationBn: "সিলেট শহরতলী" },
        { name: "Lakkatura Tea Garden", nameBn: "লাক্কাতুরা চা বাগান", location: "Sylhet suburb", locationBn: "সিলেট শহরতলী" }
      ]
    },
    {
      id: 62,
      name: "Sirajganj",
      nameBn: "সিরাজগঞ্জ",
      division: "Rajshahi",
      divisionBn: "রাজশাহী",
      siteCount: 4,
      sites: [
        { name: "Baghabari Killing Field", nameBn: "বাঘাবাড়ি বধ্যভূমি", location: "Shahjadpur", locationBn: "শাহজাদপুর" },
        { name: "China Bandh Killing Field", nameBn: "চায়না বাঁধ বধ্যভূমি", location: "Sirajganj Sadar", locationBn: "সিরাজগঞ্জ সদর" },
        { name: "Barakandi Killing Field", nameBn: "বারাকান্দি বধ্যভূমি", location: "Ullapara", locationBn: "উল্লাপাড়া" },
        { name: "Ismailpur Killing Field", nameBn: "ইসমাইলপুর বধ্যভূমি", location: "Tarash", locationBn: "তাড়াশ" }
      ]
    },
    {
      id: 63,
      name: "Sunamganj",
      nameBn: "সুনামগঞ্জ",
      division: "Sylhet",
      divisionBn: "সিলেট",
      siteCount: 4,
      sites: [
        { name: "Dolura Mass Grave", nameBn: "ডলুরা গণকবর", location: "Dolura border", locationBn: "ডলুরা সীমান্ত" },
        { name: "PTI Killing Field", nameBn: "পিটিআই বধ্যভূমি", location: "Sunamganj town", locationBn: "সুনামগঞ্জ শহর" },
        { name: "Chhatak Cement Factory", nameBn: "ছাতক সিমেন্ট ফ্যাক্টরি", location: "Chhatak", locationBn: "ছাতক" },
        { name: "Raniganj Massacre", nameBn: "রানিগঞ্জ গণহত্যা", location: "Jagannathpur", locationBn: "জগন্নাথপুর" }
      ]
    },
    {
      id: 64,
      name: "Habiganj",
      nameBn: "হবিগঞ্জ",
      division: "Sylhet",
      divisionBn: "সিলেট",
      siteCount: 4,
      sites: [
        { name: "Chunarughat Killing Field", nameBn: "চুনারুঘাট বধ্যভূমি", location: "Chunarughat Thana", locationBn: "চুনারুঘাট থানা" },
        { name: "Teliapara Killing Field", nameBn: "তেলিয়াপাড়া বধ্যভূমি", location: "Madhabpur, Tea garden", locationBn: "মাধবপুর, চা বাগান" },
        { name: "Foyzabad Hill", nameBn: "ফয়েজাবাদ হিল", location: "Bahubal", locationBn: "বাহুবল" },
        { name: "Krishnapur Massacre", nameBn: "কৃষ্ণপুর গণহত্যা", location: "Lakhai", locationBn: "লাখাই" }
      ]
    }
  ]
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = genocideData;
}
