DROP TABLE IF EXISTS Auth;
DROP TABLE IF EXISTS Users_Suivi;
DROP TABLE IF EXISTS Auteurs_Suivi;
DROP TABLE IF EXISTS Commentaires;
DROP TABLE IF EXISTS Collec;
DROP TABLE IF EXISTS Collections;
DROP TABLE IF EXISTS Categories;
DROP TABLE IF EXISTS Livres;
DROP TABLE IF EXISTS Auteurs;
DROP TABLE IF EXISTS Users;


CREATE TABLE IF NOT EXISTS Users
(
    Id INTEGER,
    Email VARCHAR(100),
    Mdp VARCHAR(200),
    Photo VARCHAR(200),
    Nom VARCHAR(50),
    Is_Admin BOOL,

    PRIMARY KEY (Id)
);

INSERT INTO Users (Id, Email, Mdp, Photo, Nom)
VALUES
('admin@biblio.com','ac9689e2272427085e35b9d3e3e8bed88cb3434828b43b86fc0596cad4c6e270', NULL, 'Admin', 1  ),
('yann.forunier@biblio.com', '3e2950099c78b5eb6d704294b5a9c402f3b17950aa5d02047f95ca96fa79512b', NULL,'Yann Fournier', 1),
('adriana.pullig@biblio.com', 'fdf5db5fc459568871551409988036853a5adf2d85ff3853d019b307bfacf517', NULL, 'Adriana Pullig', 1),
('yann@ynov.com','a10415383402e005336f225fd72e5cfa43e113343c55a439737ba985f941e185',NULL, 'Yann',0 )


CREATE TABLE IF NOT EXISTS Auteurs
(
    Id INTEGER,
    Nom VARCHAR(50),
    Description VARCHAR(500),
    Photo VARCHAR(200),

    PRIMARY KEY (Id)
);

INSERT INTO Auteurs (Id, Nom, Description, Photo)
VALUES
('Hans Peter Müller', NULL, 'https://m.media-amazon.com/images/S/amzn-author-media-prod/kbfam7pltiv4pd3pkrjvo2tv69._SY600_.jpg'),
('Abelle Leroy', NULL,NULL),
('Martine Voclain', NULL, 'https://m.media-amazon.com/images/S/amzn-author-media-prod/7u7koh5e82dliv8v7fsged1f4d._SY600_.jpg'),
('Henri Cohen', NULL, NULL),
('Anne-Sophie Laroche', NULL, 'https://m.media-amazon.com/images/S/amzn-author-media-prod/37n8g015k5cuil5nm5kc7mfbn2._SY600_.jpg'),
('Loîc Ternisien', 'Scientifique de formation, Loïc Ternisien a découvert la naturopathie au Canada. Spécialisé en aromathérapie et en herboristerie, il consulte entre Montréal et Paris. Formateur, il est aussi le fondateur d&#39un programme de rééquilibrage alimentaire Nyam.fr, et anime la série web " Les Tutos de Loïc " où il présente de façon ludique l&#39aromathérapie.', 'https://m.media-amazon.com/images/S/amzn-author-media-prod/3mc3s96g8niih45bgnhmb4v0lr._SY600_.jpg'),
('Recettes Pros', NULL, 'https://m.media-amazon.com/images/I/01Kv-W2ysOL._SY600_.png'),
('Bertrand Waterman', NULL, 'https://m.media-amazon.com/images/S/amzn-author-media-prod/u53vmo838ip1r2dp1stp8duvfq._SY600_.jpg'),
('Virginie Martin', 'Grégoire Cozon est médecin hospitalier, maître de conférence des universités à l&#39UFR de médecine Lyon-Est (Université Claude Bernard Lyon 1) et spécialiste des déficits immunitaires primitifs de l&#39adulte ainsi que de la prise en charge de maladies de cause indéterminée. Virginie Martin suit avec ses enfants un régime d&#39éviction sans gluten, sans lait, sans sucre et sans levure depuis plusieurs années. Etant passionnée de cuisine, elle a réussi à adapter des plats courants à leur régime d&#39éviction et a alors créé le blog latabledesintolerants, dans lequel sont répertoriées plus de 400 recettes. Les recettes présentées dans cet ouvrage sont en partie inédites.', 'https://m.media-amazon.com/images/I/01Kv-W2ysOL._SY600_.png'),
('IG Media', NULL, 'https://m.media-amazon.com/images/S/amzn-author-media-prod/ihcdde44dr4qblkflu3a73j6uf._SY600_.jpg'),
('Peter J.D\Adamo', NULL, NULL),
('Déborah Cohen', NULL, 'https://m.media-amazon.com/images/S/amzn-author-media-prod/u6mbmp7h6dtq6endpp7vqnocvb._SY600_.jpg'),
('Tim Spector', 'Revue de presse
Tim Spector makes healthy eating exhilarating, empowering and achievable. -- Hugh Fearnley-Whittingstall

A brilliant deep-dive into how food affects our wellbeing – and more importantly, what we can do about it. Enlightening and empowering -- Liz Earle

Spector writes as a food lover... Every person&#39s ideal diet is different, and should be based on sensible choices from a position of knowledge. Food for Life is a feast of that knowledge... A valuable reference book to keep on a kitchen shelf. ― Guardian

The nutrition revolution is well underway and Tim Spector is one of the visionaries leading the way. His writing is illuminating and so incredibly timely. -- Yotam Ottolenghi - praise for SPOON-FED

[A] weighty and detailed guide to modern living... [Spector] explains how to boost your microbiome and tailor your diet. ― Sunday Times, *Books of the Year*

No fads, no nonsense, just practical, science-based advice on how to eat well. ― Daily Mail, *Books of the Year*

Food for Life is a fascinating tour d&#39horizon, deftly drawing on recent research... Well
written [and] informative.
― Literary Review

Tim Spector has been exploding the myths around food and health for years... Here he continues the demolition job in a rigorously academic book that welcomes the layperson with open arms. ― The Times, *Books of the Year*

Tim&#39s book is a revelation. With his years of experience and engaging writing, he navigates the fascinating and complicated relationship between food and health. A must-read for anyone seeking a respected and trustworthy guide through the murky world of nutrition -- Dr Rupy

A life-changing book -- Davina McCall
Quatrième de couverture
&#39Life-changing&#39 DAVINA McCALL
&#39A must-read&#39 DR RUPY AUJLA
&#39Fascinating&#39 NIGELLA LAWSON
&#39Empowering&#39 LIZ EARLE

**AS HEARD ON THE DIARY OF A CEO PODCAST**

Empowering and practical, Food for Life is nothing less than a new approach to how to eat - for our health and the health of the planet.

Food is our greatest ally for good health, but the question of what to eat in the age of ultra-processed food has never seemed so complicated.
Drawing on cutting-edge research and personal insights, Professor Tim Spector offers clear answers in this definitive, easy-to-follow guide to the new science of eating well.

‘No fads, no nonsense, just practical, science-based advice on how to eat well’ Daily Mail, Books of the Year

&#39A rigorously academic book that welcomes the layperson with open arms&#39 The Times

** A THE TIMES and SUNDAY TIMES BOOK OF THE YEAR**
** WINNER OF THE FORTNUM & MASON SPECIAL AWARD **


En lire plus', 'https://m.media-amazon.com/images/I/01Kv-W2ysOL._SY600_.png'),
( 'Carole Garnier', 'Carole Garnier est journaliste à Saveurs et l&#39auteure de nombreux livres de référence sur l’alimentation santé aux éditions Leduc. Ensemble elles ont publié Ma bible de l’alimentation anticholestérol.', NULL),
('Karine Simon', NULL, 'https://m.media-amazon.com/images/S/amzn-author-media-prod/u5d0so8jdqq9qruul0i3lpoj27._SY600_.jpg'),
('Terry Wahls M.D.', 'Extrait
INTRODUCTION
I used to run marathons and climb mountains in Nepal. I’ve competed multiple times in the American Birkebeiner 54-kilometer cross-country ski marathon (once while pregnant), earned a black belt in tae kwon do, and won a bronze medal in women’s full contact free sparring at the trials for the 1978 Pan American Games in Washington, DC. I used to feel invincible.
Then I developed multiple sclerosis. After decades of troubling symptoms I tried to ignore, I was finally diagnosed in 2000. By that time, the disease had a good footing in my central nervous system. My decline progressed rapidly. Within two years of my diagnosis, I could no longer play soccer with my kids in the backyard. By fall 2003, walking from room to room for my hospital rounds exhausted me, and by summer 2004, my back and stomach muscles had weakened so much that I needed a tilt/recline wheelchair. Within three years of initial diagnosis, my disease had transitioned from relapsing-remitting multiple sclerosis into secondary progressive multiple sclerosis. In that phase, disability slowly progresses despite increasingly aggressive therapy. By 2007, I spent most of my time lying in a zero-gravity chair. I was 52 years old.
Everyone with multiple sclerosis has a story—the years of clues and strange symptoms that finally, in retrospect, make sense. It is in the nature of most neurological and autoimmune diseases that symptoms accumulate slowly, bit by bit, over the course of decades. This is what happened to me. As a doctor, I was compelled to find answers: a diagnosis and a cure. As a patient, I was compelled to save my own life.
Like most physicians, I was always focused on quickly diagnosing my patients, and then using drugs and surgical procedures to treat them—that is, until I became a patient myself. Conventional medicine was failing me. I saw that. I was heading toward a bedridden life. Since the beginning of our profession, physicians have used self-experimentation, either to prove a scientific point or to treat themselves when the conventional treatments were of limited value. In that tradition, and in the face of this chronic, progressive disease for which there was no cure, I began to experiment on myself. What I didn’t expect were the stunning results I got from my self-experimentation: I not only arrested my disease, I achieved a dramatic restoration of my health and my function. What I learned changed forever how I saw the battling worlds of health and disease.
More than a hundred years ago, Thomas Edison said, “The doctor of the future will give no medicine, but will interest his [or her] patients in the care of the human frame, in a proper diet, and in the cause and prevention of disease.” This became my new course, my passion, and my mission. I understood health and disease in an entirely new way. I became a new person, both physically and emotionally, both personally and professionally. I also became passionately committed to helping other people become new people, too.
My Diagnosis
The stress and pressure of medical school may have been what triggered my first symptoms in 1980, years before I had any idea what they were. I would eventually call them “zingers”—intense stabs of facial pain. They lasted just a moment and would come randomly, sometimes in waves, the episodes building over a week or two and then gradually fading over the next several. They were most likely to happen during my busiest and most brutal hospital rotations, with shifts lasting thirty-six hours and allowing for little sleep. Over the years they became steadily worse, like electrical pain that felt like a 10,000-volt cattle prod sticking me in the face.
At the time, I thought the episodes of face pains were an aggravation, nothing more. I thought it was an isolated, unexplained problem—one of those medical mysteries that don’t really require solving. Even as a doctor, I didn’t think much about it. I was too busy with my own patients to dedicate too much diagnostic thought to myself. I certainly never suspected an autoimmune problem.
This was my first symptom, but it was not likely the moment when multiple sclerosis began its relentless march through my central nervous system. For at least a decade before then, probably two, my brain and spinal cord had been under siege from friendly fire—my own immune system attacking the myelin that insulated my nerves. I couldn’t feel it at first. I couldn’t feel it for years. Nevertheless, it was happening.
As the years passed, I became a mother, first to my son, Zach, then my daughter, Zebby. The rigors of parenting and full-time work distracted me, but my multiple sclerosis clock was ticking. This was a clock I did not hear, even though alarms of visual dimming and the zingers were going off. I fully expected to be an active, adventurous, vibrant woman for at least forty more years. I imagined mountain climbing with my children, even as a white-haired old grandma. I never thought my unexplained symptoms would have anything to do with something as basic as my mobility or as crucial as my thinking.
One evening at a dinner party, I was talking to a neurologist and I happened to mention that I perceived the color blue somewhat differently in my right and left eyes. Blues were a bit brighter when I used my right eye than if I used the left. She seemed interested.
“You’ll have multiple sclerosis someday,” she said. It was the first time anyone had said those words. My father died the next morning, and so her words were forgotten in the chaos of grief. Years later, I recalled those prescient comments.

The day my wife, Jackie, noticed I seemed to be walking strangely, I didn’t believe her. I didn’t even notice until she insisted we go for a three-mile walk to the local dairy for ice cream. By the time we got back, I was dragging my left foot like a sandbag. I couldn’t pick up my toes. I was exhausted, nauseated, and scared. I scheduled an appointment with my physician.
Many people who are ultimately diagnosed with multiple sclerosis go through a similar experience. Symptoms develop slowly over years, and diagnosis may take additional years once physical problems manifest and become obvious.
I spent the next few weeks going through test after test, dreading each result. Some tests involved flashing lights and buzzers. Others involved more electricity and more pain. There were more blood tests. I said little and feared much. Everything came back negative, but there was clearly something wrong with me.
Finally, we were down to the last test: a spinal tap. If there were oligoclonalband proteins (an indicator of excessive amounts of antibodies) present in the spinal fluid, then the diagnosis would be multiple sclerosis. But if this test was also negative, then I likely had what they call “idiopathic degeneration of the spinal cord” (meaning they don’t know the cause). In the long list of potential diseases I had faced, this seemed like the best option. I was hopeful.
When I got up the next morning, I knew that the results should be in my chart. I could get into the clinic medical records from my home computer through remote access. I brought up my medical record on the screen and went to the laboratory section. Positive. I stood up. I paced. Two hours later, I logged onto the system and checked again. Five times I looked up my results,
hoping they would somehow change. They never did.
It was official: I had multiple sclerosis.
 My Decline
In summer 2000, I moved with Jackie and my children from Marshfield, Wisconsin, to Iowa to accept a joint appointment as assistant professor at the University of Iowa and chief of primary care at the VA hospital. I was newly diagnosed with multiple sclerosis. I was taking Copaxone, which my physician had prescribed for the MS, and I relied entirely on my physicians for treatment decisions. I had been trained as a doctor and conditioned to believe that doctors know best. Besides, what did I know about multiple sclerosis? It wasn’t my area. I was seeing the very best people and getting the very best treatments available, so I assumed I was doing all that I could do.
I was determined not to let my diagnosis influence my new job. I was in a leadership position with plenty of challenges, and I loved it. I enjoyed teaching, and the kids were thriving in their new home. I thought I was doing pretty well, and so did my doctors. I even began to imagine I might never get much worse. I dreamed I might not even have to confess to my children that
I had multiple sclerosis.
Then my right arm and hand became weak. My doctors gave me steroids to suppress my immune cells, and my strength slowly returned, but it was the beginning of a slow, steady decline. I could see it, Jackie could see it, and so could the kids. They’ve since admitted that sometimes it was embarrassing to have me around because I was less and less mobile. Sometimes they wished I wouldn’t attend their activities, and that made me feel guilty for wanting to be there. It was a strain on the whole family, and I felt responsible. It was all my fault. I was supposed to be the provider, and I was slowly losing my ability to manage my own body. It had been only two years since my initial diagnosis.
Then something happened that changed my life. In 2002, my neurology doctor at the Cleveland Clinic noted that I was slowly getting worse and suggested I check out Ashton Embry’s MS charity website, Direct-MS, at www.direct-ms.org. Dr. Embry is a geologist with a Ph.D. whose son has MS. Dr. Embry’s son improved dramatically by changing his diet, so Dr. Embry became an active and vocal proponent of the link between diet and multiple sclerosis. This was the first I’d heard of such an idea—or, at least, the first time I paid attention. Although it sounded a little like “alternative care” to me—and, being a conventional doctor, I didn’t put much stock into what I saw as fringe medical practices—this was a suggestion from my neurologist, so I took her seriously. I decided to check it out.
Dr. Embry’s website was full of scientific references, which I began to read one by one. The articles were from peer-reviewed journals, written by scientists from highly respected medical schools. This wasn’t “soft science.” This wasn’t “fringe.” This was legitimate research. It was difficult science, too. A lot of it was in fields outside my expertise, or it relied on basic science concepts that hadn’t been part of my medical training. I had trouble absorbing everything, and the MS-related brain fog didn’t help. There was so much new information—how did I not know about any of this? After a lot of intensive reading, I determined that Dr. Embry was not a charlatan and that maybe he was on to something. What if diet could have a major impact on MS? After years of leaving my health in the hands of doctors while continuing to decline, this idea fascinated me. I could control what I ate. It seemed too easy and too good to be true. I had to know more.
Dr. Embry’s website was the first place I heard about Dr. Loren Cordain. Dr. Cordain linked changes in the human diet to the development of chronic disease in Western society. He had published a number of articles and had also recently published a book for the public called The Paleo Diet: Lose Weight and Get Healthy by Eating the Foods You Were Designed to Eat, which was much easier reading than the technical scientific papers.1 I began to absorb information more quickly: molecular mimicry, leaky gut, lectins, immune modulation (I’ll talk about all these things later in this book). I began to see where Dr. Embry and Dr. Cordain were going with their theories. I began to consider that what we eat has a major, rather than a minor, influence on how our bodies work.
I was particularly interested in the idea that excessive carbohydrates and sugars in our modern diet lead to excess insulin and inflammation. The evidence that the original human diet could possibly improve my MS was compelling, but switching to this kind of diet would be a major change for me. I had been a vegetarian since my college days and I loved my beans and rice.
I loved making bread. Could I really cut out grain, dairy, and legumes, the current staples of my diet?
But I wanted to arrest my disease more than anything else. I wanted to keep walking, working, and playing with my kids. I decided to try it. Meat was back on the menu, and I gave up the now-forbidden foods I loved so much. At first the smell of meat was nauseating to me. I started slowly, adding meat to soup in small amounts. With time, it got easier.
I was hopeful about this change, but despite this switch to a Paleo Diet, my decline continued. I couldn’t play soccer in the backyard with my kids without falling. I couldn’t take long hikes with the Cub Scouts and Girl Scouts.Then it became harder to take even short walks with Jackie. Fatigue became more and more of a problem. I was disappointed, at times despondent, and tears came at inconvenient times. But I was determined. Some of the entries on Embry’s website said that recovery took five years. I realized I could not expect an overnight miracle, so I stuck with the changes. Even if progress would be slow, it was still something I could do for myself, and that came with its own sense of empowerment.
Meanwhile, I rearranged my schedule to avoid walking. My doctor told me that it was time to get a scooter, and then changed his mind and suggested a tilt/recline wheelchair because of the worsening fatigue. He also suggested I try taking mitoxantrone, a form of chemotherapy. When that didn’t help, I switched to a new, potent immune-suppressing medication called Tysabri; but before I went in for my third injection, Tysabri was pulled from the market because people were dying from the activation of a latent virus in their brains. After this, my doctor suggested that I take CellCept, a transplant medicine, which would suppress my immune cells. I often had mouth ulcers after that. My skin was grayish. I started every day tired, and despair gnawed at me each night as I lay in bed. Jackie, Zach, and Zebby were my lifeline. Jackie would hold me and tell me we’d get through everything together. We often discussed our kids and how they were absorbing the ways that we dealt with what was happening. For their sakes, I didn’t want to let my discouragement and fatigue show.
Though I had resisted getting the tilt/recline wheelchair, it actually felt liberating once I had it. I was able to go outside and stroll (or rather, roll) with my family as we hiked around the county park or the neighborhood. It did make my life easier. It weakened my back muscles, however, and the more those muscles atrophied, the more time I spent in bed. I didn’t talk about it much, but I thought it likely that eventually I would become bedridden. Sitting at my desk at work was exhausting. Then I found a zero-gravity chair, designed like the NASA chairs used during space flights. When I was fully reclined, my knees were higher than my nose and gravity held me in the chair. I had one for my office and another for my home. That helped with the fatigue a great deal, but this wasn’t how I wanted to live my life. I just couldn’t accept that this was my future.
Taking My Life Back
Getting into that wheelchair triggered something. I realized that conventional medicine was not likely to stop what was happening to me. I still hoped that the Paleo Diet would make a difference, but I hadn’t seen much of a change thus far. I decided to go back to reading the medical literature. I wanted to know if there was something more, some other avenue, something the doctors had overlooked. I had come to accept that recovery was not possible, but maybe I could slow things down. I was through ceding my power to doctors and not seeing results. I needed to be more forward thinking. I vowed to research and study and exhaust every avenue, just in case there was some other answer for me out there, something that would delay a little longer the inevitable life in bed.
At first, I began to read all about the latest clinical drug trials going on, but then I realized that those all involved medications that I’d be unable to get. This kind of knowledge would only be theoretical. So I started to think outside the box. I knew how science worked—I knew that studies on mice and rats are always the source of tomorrow’s treatments, but that it’s typically years, often decades, before anything becomes a matter for a clinical trial, let alone a standard of care. This was the cutting edge of the cutting edge, so I began to look there. I wanted to know what the brightest minds were thinking and how they envisioned the future of diseases like mine.
Each night I would spend a few minutes searching www.pubmed.gov for articles about the mouse model for MS. I knew that brains afflicted with MS shrink over time, so I also began reading about the animal models of other conditions with shrinking brains. I researched Parkinson’s disease, Alzheimer’s dementia, Lou Gehrig’s disease (amyotrophic lateral sclerosis, or ALS), and Huntington’s disease. I discovered that, in all four of those conditions, the mitochondria—small subunits within cells that manage the energy supply for that cell—stop working well and lead to early death of brain cells, causing shrinking of the brain. More searching led me to articles in which mouse brains and their mitochondria had been protected using vitamins2 and supplements like coenzyme Q, carnitine, and creatine.3
I didn’t have anything to lose, so I decided to take action. I translated those mouse-size doses into human-size ones, then made an appointment with my primary-care doctor. She looked over my list and decided the supplements were likely safe. She entered each one into my medication list, one by one, to check for potential adverse interactions with my medication list. There were none. I was excited about starting my new, experimental vitamin-and supplement routine. I began to take them and was disappointed when nothing happened. After a couple of months I stopped taking them, and a few days later I couldn’t get out of bed. When I resumed the supplements, I could get up again. They were helping after all!
This was a ray of hope. Obviously, I thought, my body was getting something from those supplements that it wasn’t getting without them—something it needed.
Discovering E-Stim
Next, I discovered electrical therapy. I got the idea by reviewing a research protocol that used electrical stimulation of muscles to treat people who’d become paralyzed due to an acute spinal injury. The purpose of this therapy, known as e-stim, in the research was to maintain bone health and quality of life for these patients. Reviewing that research protocol made me wonder if the electrical stimulation might slow down my disability. I talked to a physical therapist who used this technology, and he warned me that it was painful and exhausting for the athletes who did it. He wasn’t sure if it would help me, but he was willing to give it a test session.
During my first session, the therapist had me lie on my belly and applied the electrodes to my left paraspinous back muscles. I lifted my left leg off the table and held it there as he dialed up the electrical current. If felt like bugs racing across my skin. He kept dialing up the current. The bugs raced faster. It became more and more electrical, and then painful. After a minute my therapist asked if he could turn up the current again. This is the typical procedure because the brain releases endorphins and nerve growth factors that make the e-stim more comfortable, so after a few minutes patients can typically tolerate a higher dose of electricity. When that was done, we did my quadriceps muscles on my left leg, where I suffered particular weakness. After it was over, I had completed thirty minutes of “exercise” that was more rigorous than what I had been able to do in years. I began a regular regimen of e-stim therapy.
Discovering Functional Medicine
Every night, after everyone else was sleeping, I searched the Internet, looking for more information that might help me. One night I stumbled onto the webpage for the Institute for Functional Medicine and was immediately intrigued.
Its goal was to provide clinicians like myself with a better way to care for people with complex chronic disease by looking at how the interaction between genetics, diet, hormone balance, toxin exposures, infections, and psychological factors contribute to the development of disease or the improvement of one’s health and vitality.
This was exactly what I had been searching for since I’d hit the wheelchair. The institute had textbooks, conferences, and continuing education courses for physicians and other health care professionals. One course captured my attention immediately: Neuroprotection: A Functional Medicine Approach for Common and Uncommon Neurologic Syndromes. I ordered it and began studying, night after night. Although it was difficult at first, that functional medicine course taught me that I could improve the condition of mymitochondria and my brain cells. It gave me an entirely new way of thinking about brain health and how it relates to whole-body health. Although it wasn’t the way I was trained, it made sense to me. It was all logical and scientifically supported, so it resonated with me as a doctor, but it also fit into the context of my experience as an MS patient.
I also understood that it was likely that I had a genetic vulnerability, or several, that had increased the likelihood that I’d develop multiple sclerosis. I finally had a much deeper understanding of the significance to the brain of leaky gut, food allergies, toxins, mitochondria that were not providing enough energy for the cell, neurotransmitter problems, and the impact of having inefficient enzymes for the metabolism of B vitamins and sulfur. Based on what I now knew, I had a much longer list of vitamins, minerals, amino acids, antioxidants, and essential fatty acids that I understood were helpful for mitochondria and brain cells. I finally understood why my brain was on fire, under attack by my immune cells, and I also had some ideas about what I could do to cool the fires of inflammation that were raging there. My worldview was changing. I immediately began to plan and implement lifestyle changes that went far beyond anything I’d been doing before. The seeds for the Wahls Protocol, although not yet named, were sown.
But how would I do it? I had a long list of nutrients, but was I really going to take huge fistfuls of pills every day? And would that even work? The Paleo Diet suggested that food was the best source, but many functional medicine concepts relied on supplements. Our Paleolithic ancestors didn’t take supplements, obviously. The Paleo Diet had taught me to eliminate certain foods but didn’t necessarily tell me how to get the precise nutrients I now knew I needed. Functional medicine helped me to determine what nutrients I needed with their list of advised vitamins and supplements to take but didn’t necessarily tell me how to get them.
If I could get those same nutrients I was taking in pill form from the food I was eating, I reasoned, those nutrients might be more effective than the synthetic versions of the nutrients I was taking. In addition, I might also pick up many additional compounds—maybe thousands of compounds—that had yet to be named, that contributed synergistically to the effectiveness of a particular vitamin or supplement because they existed along with the nutrients in the original package. (Most vitamins in nature are actually a family of related compounds that are all biologically active in our cells.) I realized that I needed an eating plan specifically designed to maximize my mitochondrial and brain function—an eating plan that went beyond anything I’d already encountered. It would incorporate Paleo principles, functional medicine concepts, and my own research. Maybe that would jump-start the changes in my body I desperately wanted to see and feel.
I stared at my new list of the nutrients functional medicine suggested I needed for better brain health and wondered: Which foods contain these nutrients? I had no idea. I showed my list of nutrients to my registered dietitian friends, but they didn’t know where to find those things in the food supply, either. Next I went to the health science library. I couldn’t find any answers there, and so I went back to the Internet and began searching once again. With more work, I finally developed a long list of new foodstuffs to add to my diet that seemed to match up nutritionally. I began to add these to every meal.
 That’s when things really began to change in my brain and body.
Generating the Proof
I was just about to start a new position as the primary care doctor for the polytrauma unit, treating veterans with head injuries. It was a job I wasn’t sure I could do, and Jackie and I both wondered whether the hospital had assigned me the position in order to force me to face the fact that I could no longer work. Instead, I surprised everyone, including myself. After just three months practicing the new diet, gradually increasing my e-stim exercises, and practicing daily meditation and a simple self-massage, I could walk between exam rooms using just one cane. After six months I could walk throughout the entire hospital without a cane. But it wasn’t just my body that had changed. I experienced and saw the world very differently. The old me—the conventional internal medicine physician—had been struck down like Paul on the way to Damascus. The old me, who had relied on drugs and procedures to make my patients well, who had been made progressively more feeble by my illness, had been replaced with someone who understood intellectually and physically that disease begins at the cellular level, when cells are starved of the building blocks they need to conduct the chemistry of life properly, and that the root of optimal health begins with taking away the things that harm and confuse our cells while providing the body with the right environment in which to thrive. I finally understood what I had to do to provide my cells with all the building blocks of life they needed to heal. I was doing it, and it was working.
This completely altered how I practiced medicine. I began teaching residents and patients in our primary care clinics how to care for themselves in a way I had only just discovered as optimal, using diet and health behaviors for diabetes, high blood pressure, high cholesterol, mood disorders, posttraumatic stress disorder, and traumatic brain injury instead of relying only on drugs. The residents learned that diet and lifestyle are powerful treatments, often as effective, if not more so, than drugs. The patients in the traumatic brain injury clinic were also eager to learn what things they could do to speed the healing of their brains. In patient after patient, I watched symptoms and the need for drugs decrease as diet and lifestyles improved.
The many people I helped notwithstanding, however, anecdotal evidence wasn’t good enough for me. There was no question that the medical establishment wouldn’t believe, let alone endorse, my protocol without a clinical trial. I felt compelled to apply the same rigor to my own work that I had required when researching what to do for myself. I needed definitive tests to determine whether this would help others. I decided to begin the long, complex, and expensive process of doing a clinical trial to prove that my new protocol didn’t just work for me—that it would work for anyone with a similar affliction. That meant designing a clinical trial, writing the grant, securing funding (in a world that funds less than 2 percent of grants), and getting my study approved by the Institutional Review Board (the committee that oversees research at the VA and university). In less than eighteen months, I achieved the seemingly impossible. On October 6, 2010, we enrolled our first patient.
In fall 2011, a group organizing a local TEDx talk asked me to submit a proposal to speak. For those not familiar with TEDx, it is an offshoot of TED, which stands for Technology, Entertainment, Design. This is a set of nonprofit conferences on a variety of topics that are filmed and available for public viewing on the Internet. TEDx is similar. Conferences are organized locally but are also available to view for free online, and speakers are not paid. Millions of people view the TED and TEDx talks, however, and many have gone viral. I would have eighteen minutes to tell my story and explain how I designed a diet specifically for my mitochondria and my brain. I agreed.
In my TEDx talk, I explained the specifics of my intensive nutrition plan, and I challenged people to become ambassadors for their mitochondria and to eat for health. At the end of November, that TEDx talk, “Minding Your Mitochondria,” was placed on YouTube. It spread into the Paleo community, the MS community, and the functional medicine community. Within a year, that lecture had more than 1 million views. I’d touched more lives than most physicians or scientists will touch in their lifetimes. I felt like I was helping to change the world for the better, and that was exhilarating, but I wanted to do even more.
My mission was never clearer. I needed to continue to do the research so I could reach my physician colleagues and eventually change the standard of care. I needed to continue to teach the public because I believe the public will soon be far ahead of the medical community when it comes to understanding the power of food to reclaim and maintain health.
The next step was to write this book.
Meanwhile, I’ve expanded the lab, we have additional studies under way, and our preliminary results continue to be very exciting. We have submitted the first study’s safety data. Once that paper is published, we will work out our next papers, which will describe in detail the outcomes data, specifically showing changes in fatigue levels, mood, thinking, and walking ability. We have several other trials in the works so we can continue to refine and improve and disseminate information about the limitless potential of this lifestyle.
I still have multiple sclerosis, but now I also have my life back.
Your Story
It will take many years and millions of dollars for us to do clinical trials that can prove that the Wahls Protocol is effective for multiple sclerosis and other chronic diseases. I am busy writing and submitting grants to conduct those studies. In the meantime, I invite you to read my book, take my story to heart, and talk to your family and your physician about the protocol. Because here’s the most important thing I want you to realize: Your doctor cannot cure your autoimmune disease. Your medication can only ease your symptoms, sometimes with side effects that make you feel even worse. But this is not the end of the story. The power of healing is within you. All you need to do is give your body what it needs and remove what is poisoning it. You can restore your own health by what you do—not by the pills you take, but by how you choose to live. When you eat and live in accordance with the needs of your cells, your body can finally concentrate on healing, and that is when the dramatic changes will happen for you.
The purpose of my years of self-experimentation was to determine exactly what the body needs to fight back against autoimmune disease. The result is the Wahls Protocol: a systematic and aggressive intervention into your body’s downward spiral. It is a mending of your broken biochemistry that comes not from your doctor or your pharmacist but from you, making changes that are entirely under your control. It is a restoration of your body’s healing power generated by altering what you eat and do each day. You don’t have to wait until all the proof comes in and is vetted by the medical community. You don’t have to wait until a “food prescription” becomes part of the standard of care in your conventional doctor’s office (which I believe someday will happen—it is the only rational course). You can have this information right now. Food is the bedrock of health. Our food choices can either lead to disease or create health and vitality.
As you implement the Wahls Protocol, you will likely begin noticing that your thinking is clearer, your moods are better, and your energy is coming back. Those over their ideal weight will find that their weight normalizes without hunger. In my clinics, when people come back in three months, everyone who has fully implemented the diet has begun noticing all these things. For the next three years, I typically see my patients “youthen”—they look younger and younger each time I see them as their cells revitalize and their bodies become healthy once more.
If I can rise up from a tilt/recline wheelchair by changing the way I live my life, consider what the people you love, your community, your country, and the world would look like if everybody began eating and living to optimally fuel their cells. We could restore health and vitality to the world and dramatically lower the cost of health care, saving billions of dollars. What choice will you make? How will you choose to live the rest of your life? With disability? Or with vitality? It’s all up to you.
Reprinted by arrangement with Avery, a member of Penguin Group (USA) LLC, A Penguin Random House Company. Copyright © Terry Wahls, M.D., 2014.
Revue de presse
"In The Wahls Protocol, Dr. Wahls provides elegant first hand validation that diet truly represents the most powerful medicine. This book is totally supported by the most leading edge research and provides a beacon of hope when compared to the ever changing landscape of pharmaceutical recommendations for multiple sclerosis."
—David Perlmutter, MD, #1 New York Times bestselling author of Grain Brain
 
"Groundbreaking! Once you understand why you need to eat for health, Dr. Wahls delivers a detailed road map, guiding you step by step.  This will be life changing for many."
—Robb Wolf, New York Times bestselling author of The Paleo Solution
 
"Using clear language, Dr. Wahls teaches how our food and lifestyle choices create health or disease depending on our choices. For anyone suffering from autoimmune or other chronic health problems, this book will be life changing."
—Mark Hyman, M.D. #1 New York Times bestselling author of The Blood Sugar Solution. 
 
"Whether or not you struggle with autoimmune diseases, I can&#39t recommend The Wahls Protcol highly enough. Dr. Wahls provides a clear, in-depth, copiously researched dietary and lifestyle protocol to help you take charge of your health and your life. An absolute must-read book."
—JJ Virgin, New York Times bestselling author of The Virgin Diet
 
"Terry Wahls is a hero to many for her discovery that a nourishing ancestral diet can heal multiple sclerosis. In The Wahls Protocol, Terry sets forth a straightforward plan for achieving good health through good food. Not just for MS patients, The Wahls Protocol is a fascinating tale that proves the wisdom of Hippocrates: ‘Let food be thy medicine.’ Try it, it works!"
—Paul Jaminet, Ph.D., author of Perfect Health Diet and editor-in-chief of the Journal of Evolution and Health
 
"Dr. Wahls teaches you how to eat and live so that you can upgrade dramatically your brain and body."
—Sara Gottfried M.D., New York Times bestselling author of The Hormone Cure
 
"Terry Wahls&#39 new book is one of the most important books on health ever written. That&#39s not a hyperbolic statement, just plain fact. If doctors would take this incredible information to heart (and into their practices), the health crisis in this world would be over--the cancer industry crushed and the rise in autoimmune conditions would fall. True health reform is contained within these pages. I cannot recommend a book any more highly. Bravo Dr. Wahls!"
—Leanne Ely, C.N.C., New York Times bestsellling author of Saving Dinner 
 
"I&#39ve long recommended that anyone diagnosed with MS who is also interested in health and healing research the work of Dr. Wahls online, but the game has now changed. The Wahls Protocol will be the go-to resource for anyone suffering from MS or another autoimmune condition who is ready to fight back. Dr. Wahls outlines a clear-cut, stepped approach to dietary and lifestyle changes--supported by her extensive research and testing of the plans--that will put anyone on a path to better health. Whether you have MS or not, The Wahls Protocol is a goldmine of easy-to-follow, real-food nutritional guidelines that will leave you feeling so amazing it&#39ll make you wonder how you ever ate any other way."
—Diane Sanfilippo, BS, NC, New York Times bestselling author of Practical Paleo
 
"The Wahls Protocol is one &#39ah-ha&#39 after another of how Terry Wahls’ realizations may help you in your health journey. Not only will you be captivated by what you read, you&#39ll also learn how to be healthier. Highly recommended."
—Dr. Tom O&#39Bryan, creator of “A Grain of Truth: The Gluten e-Summit”
 
"Terry Wahls does an amazing job at highlighting the importance of micronutrients (vitamins, minerals and essential fats) as an integral part in preventing and reversing disease.  Her story is incredible and brings hope to millions needlessly suffering. The Wahls Protocol is a must read for anyone looking to reverse autoimmune conditions naturally."
—Mira Calton, CN and Jayson Calton, Ph.D., authors of Rich Food, Poor Food
 
"The best treatment for multiple sclerosis, autoimmunity, and chronic disease is teaching people how and why to eat and live for optimal health. By combining the latest science with the all-important factors of nutrition, exercise, and healthy lifestyle, The Wahls Protocol goes beyond conventional treatments and empowers you with real solutions."
—Ann Boroch, C.N.C., author of Healing Multiple Sclerosis: Diet, Detox & Nutritional Makeover for Total Recovery
 
"Dr. Wahls engages us with her personal story of triumph over multiple sclerosis while educating us on the importance of a nutrient-dense diet for our cellular health. You will find yourself drawn in and inspired to take control of your own health as Dr. Wahls shares her experiences, knowledge, and compassion. The three levels of The Wahls Protocol provide a concrete plan—including both feasible diet and lifestyle changes—to help you on your road to recovery."
—Sarah Ballantyne, Ph.D., author of The Paleo Approach
 
"The Wahls Protocol is essential reading for anyone suffering from a chronic disease and wanting to regain their health. All the therapies which restored Dr Wahls to well-being are described in detail and are succinctly summarized in the appendices. The huge amount of scientific information, clear explanations, and practical advice makes this book an invaluable resource and indispensable reference."
—Ashton Embry, Ph.D., president of Direct-MS
 
"Only Terry Wahls, M.D. could have written a book as important as The Wahls Protocol. Her discovery of a path to recovery from disabling multiple sclerosis after failing to respond to the traditional medical approach is not only a story of great personal triumph, but a manifesto of hope for many others with various chronic illnesses for which drug therapy has not worked. This is a book that provides a program that can be applied by anyone who is searching for solutions to health challenges."
—Jeffrey Bland, Ph.D., president of the Personalized Lifestyle Medicine Institute
En lire plus', 'https://m.media-amazon.com/images/I/61HuyAfbwsL._SY600_.jpg'),
('Julia Ross', 'Julia Ross is a psychotherapist and director of Recovery Systems, a clinic in California that treats mood, eating and addiction problems with nutrient therapy and biochemical rebalancing. She is one of the most successful and well-known names in nutrient therapy, and lectures at conferences and workshops around the world to share her work. Her first book, The Diet Cure, was an international bestseller.', 'https://m.media-amazon.com/images/I/51OufV3fSAL._SY600_.jpg'),
( 'Anna Gaines', NULL, 'https://m.media-amazon.com/images/I/01Kv-W2ysOL._SY600_.png'),
( 'David Perlmutter', 'Dr Perlmutter&#39s #1 New York Times bestseller about the devastating effects of gluten, sugar and carbs on the brain and body - updated with the latest nutritional and neurological science.

When Grain Brain was published in 2013, Dr Perlmutter kickstarted a revolution. Since then, his book has been translated into 30 languages, and more than 1.5 million readers have been given the tools to make monumental life-changing improvements to their health. They&#39ve lost weight, banished anxiety and depression, reduced or eliminated chronic conditions, and taken proactive steps to safeguard themselves against cognitive decline and neurological disease - all without drugs.

In this fully revised, 5-year anniversary edition, Dr Perlmutter builds on his mission. Drawing on the latest developments in scientific research, he explains how the Grain Brain programme boosts the brain, shows the benefits of using fat as a main fuel source, and puts forth the most compelling evidence to date that a non-GMO, gluten-free and low-carb diet is crucial for cognitive function and long-term health.

Featuring the latest data and practical advice based on cutting-edge medicine, including modified guidelines for testing and supplements, plus a wealth of new recipes, Grain Brain empowers you to take control of your health like never before and achieve optimal wellness for lifelong vitality.','https://m.media-amazon.com/images/S/amzn-author-media-prod/mn44e5delqnjeoqim06sn60cm0._SY600_.jpg'),
( 'Dirk Schweigler', NULL,'https://m.media-amazon.com/images/S/amzn-author-media-prod/itvoinpmbrmk3sqlt1ctof3361._SY600_.jpg'),
('Dr. Becky Campbell', 'Dr. Becky Campbell, DNM, DC, is a board-certified doctor of natural medicine specializing in functional medicine and clinical nutrition. She is the founder of DrBeckyCampbell.com and author of The 30-Day Thyroid Reset Plan. She has been featured by multiple online publications, including Mindbodygreen, Bustle, Popsugar and more, and has made TV and podcast appearances as a thyroid disease and histamine intolerance expert','https://m.media-amazon.com/images/S/amzn-author-media-prod/sevfsicdpjgo5dloi625dk29ml._SY600_.jpg')
-- (, '', NULL,'')

CREATE TABLE IF NOT EXISTS Categories
(
    Id INTEGER,
    Nom VARCHAR(100),

    PRIMARY KEY (Id)
);
INSERT INTO Categories (Id, Nom)
VALUES
(0, 'Biographies'),
(1,'Poesie'),
(2, 'pieces de theatre'),
(3, 'Roman Historique'),
(4,'Correspondances et memoires'),
(5, 'Recits de voyages'),
(6,'Litterature humouristique'),
(7,'Diabete'),
(8,'Cancer'),
(9,'Maladies transmissibles'),
(10,'Gestion de la douleur'),
(11,'Insuffisance cardiaque'),
(12,'Troubles du sommeil'),
(13,'Systeme nervexu'),
(14,'Allergies'),
(15,'Psychanalyse'),
(16,'Psychopathologie'),
(17,'Psychologie Clinique'),
(18,'Psychotherapie'),
(19,'Psychiatrie'),
(20,'Meditation'),
(21,'Guerison'),
(22,'Phytotherapie'),
(23,'Naturopathie'),
(24,'Aromatherapie'),
(25,'Holistique'),
(26,'Massage et reflexologie'),
(27,'Homeopathie'),
(28,'Dietetique'),
(29,'Special Diet Cookbooks'),
(30,'Nutrition'),
(31,'Compteurs de calories'),
(32,'Yoga'),
(33,'Culturisme et haltérophilie'),
(34,'Arts martiaux'),
(35,'Jogging - Footing'),
(36,'Natation'),
(37,'Marche'),
(38, 'Marathon'),
(39,'Blessures et reeducation'),
(40,'Sress'),
(41,'Phobies'),
(42,'Depression angoisses et stress'),
(43,'Trouble de l humeur'),
(44,'Trouble de stress post-traumatique'),
(45,'Maladie d Alzheimer'),
(46,'Troubles anxieux'),
(47,'Emotions'),
(48,'Sante personnelle'),
(49,'Vieillissement'),
(50,'Comics'),
(51,'Heroïc fantasy'),
(52,'Science-Fiction'),
(53,'Romans graphiques'),
(54,'Mystère et suspense'),
(55, 'Shonen'),
(56,'Josei'),
(57,'Yaoi'),
(58,'Yuri'),
(59,'Shojo'),
(60,'Medias et communication'),
(61,'Radio'),
(62,'Presse'),
(63,'Communication'),
(64,'Television'),
(65,'Internet'),
(66,'Liberte de la presse'),
(67, 'Bourse et finance'),
(68,'Economie internationale'),
(69, 'Economieb ndustrielle'),
(70,'Histoire economique'),
(71,'Croissance et crise'),
(72,'Economie politique'),
(73,'Developpement')


CREATE TABLE IF NOT EXISTS Livres
(
    Id INTEGER,
    Id_Auteur INTEGER,
    Id_Categorie INTEGER,
    Nom VARCHAR(100),
    Description VARCHAR(500),
    Photo VARCHAR(200),
    ISBN VARCHAR(50),
    Editeur VARCHAR(100),
    Prix FLOAT,

    PRIMARY KEY (Id),
    FOREIGN KEY (Id_Auteur) REFERENCES Auteurs (Id),
    FOREIGN KEY (Id_Categorie) REFERENCES Categories (Id)
);
INSERT INTO Livres (Id,Id_Auteur,Id_Categorie,Nom,Description,Photo,ISBN,Editeur,Prix)
VALUES





























CREATE TABLE IF NOT EXISTS Collections
(
    Id INTEGER,
    Id_User INTEGER,
    Nom VARCHAR(100),
    Is_Private BOOL,

    PRIMARY KEY (Id),
    FOREIGN KEY (Id_User) REFERENCES Users (Id)
);
INSERT INTO Collections (Id, Id_User, Nom, Is_Private)
VALUES
(0, 3, 'J\ai',1),
(1,3, 'Ma pile à lire',1),
(2,3,'Je lis',1),
(3,3,'J\ai lu', 1),
(4,3, 'J\aime',1),
(5,3,'Ma liste de souhait',1),
(6,4,'Jai',1),
(7,4, 'Ma pile à lire',1),
(8,4,'Je lis',1),
(9,4,'J\ai lu', 1),
(10,4, 'J\aime',1),
(11,4,'Ma liste de souhait',1)


CREATE TABLE IF NOT EXISTS Collec
(
    Id_Livre INTEGER,
    Id_Collection INTEGER,

    FOREIGN KEY (Id_Livre) REFERENCES Livres (Id),
    FOREIGN KEY (Id_Collection) REFERENCES Collections (Id)
);
INSERT INTO Collec (Id_Livre, Id_Collection)
VALUES
(0,0),
(1,0),
(2,0),
(0,1),
(1,1),
(2,1),
(3,6),
(4,6),
(5,6),
(3,7),
(4,7),
(5,7)


CREATE TABLE IF NOT EXISTS Commentaires
(
    Id INTEGER,
    Id_User INTEGER,
    Id_Livre INTEGER,
    Com VARCHAR(200),

    PRIMARY KEY (Id),
    FOREIGN KEY (Id_User) REFERENCES Users (Id),
    FOREIGN KEY (Id_Livre) REFERENCES Livres (Id)
);
INSERT INTO Commentaires (Id, Id_User, Id_Livre,Com)
VALUES
(1,3,0,'Génial je recommande'),
(2,4,0,'Livre passionnant'),
(3,3,1, 'Surpenant'),
(4,4,1,'waoh'),
(5,3,2, 'Ce livre est génial'),
(6,4,2, 'Incroyable'),
(7,3,3,'Génial je recommande'),
(8,4,3,'Livre passionnant'),
(9,3,4, 'Surpenant'),
(10,4,4,'waoh'),
(11,3,5, 'Ce livre est génial'),
(12,4,5, 'Incroyable'),
(13,3,6,'Génial je recommande'),
(14,4,6,'Livre passionnant'),
(15,3,7, 'Surpenant'),
(16,4,7,'waoh'),
(17,3,8, 'Ce livre est génial'),
(18,4,8, 'Incroyable'),
(19,3,9, 'Ce livre est génial'),
(20,4,9, 'Incroyable'),
-- (21,3,10,'Génial je recommande'),
-- (22,4,10,'Livre passionnant'),
-- (23,3,11, 'Surpenant'),
-- (24,4,11,'waoh'),
-- (25,3,12, 'Ce livre est génial'),
-- (26,4,13, 'Incroyable'),


CREATE TABLE IF NOT EXISTS Users_Suivi
(
    Id_User INTEGER,
    Id_User_Suivi INTEGER,

    FOREIGN KEY (Id_User) REFERENCES Users (Id),
    FOREIGN KEY (Id_User_Suivi) REFERENCES Users (Id)
);
INSERT INTO Users_Suivi (Id_User, Id_User_Suivi)
VALUES
(3,4),
(4,3)


CREATE TABLE IF NOT EXISTS Auteurs_Suivi
(
    Id_User INTEGER,
    Id_Auteur INTEGER,

    FOREIGN KEY (Id_User) REFERENCES Users (Id),
    FOREIGN KEY (Id_Auteur) REFERENCES Auteurs (Id)
);
INSERT INTO Auteurs_Suivi (Id_User, Id_Auteur)
VALUES
(3,0),
(3,1),
(3,2),
(3,3),
(3,4),
(4,5),
(4,6),
(4,7),
(4,8),
(4,9)

CREATE TABLE IF NOT EXISTS Auth
(
    Id INT,
    Token VARCHAR(100),

    FOREIGN KEY (Id) REFERENCES Users (Id)
)
INSERT INTO Auth (Id, Token)
VALUES
(0,'c1c224b03cd9bc7b6a86d77f5dace40191766c485cd55dc48caf9ac873335d6f'),
(1,'aed61ad341646a04d87a94d4f3a04db864e49539061f9a6dd417ef219225b7dc'),
(2,'5c7f252932a42cca586b4c87737192253428999ef16cf00eca983b0b2be74667'),
(3,'4d7c48af85e52e027c0d0ab08469646a3370f8357d798d6e40ba11f06521cfb9'),
(4,'ee6aa9381e07c60412e8bca2932326f413828ccabca7b96380b4170f7e704605')
