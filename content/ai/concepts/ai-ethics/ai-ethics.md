---
Title: 'AI Ethics'
Description: 'The study of how AI systems ought to be developed, distributed, and used.'
Subjects:
  - 'AI'
Tags:
  - 'AI'
  - 'Accessibility'
  - 'Deep Learning'
  - 'Equality'
  - 'Values'
CatalogContent:
  - 'learn-explainable-ai-xai'
  - 'intro-to-ai-strategy'
---

**AI ethics** is the study of ethical issues that arise in the development, distribution, and use of AI systems. As AI-based technologies become more powerful and accurate, they will have a large influence on many aspects of human societies. Already, AI systems are being deployed to help make decisions in finance, law, transportation, employment, and many other areas. It is therefore extremely important for those involved in the development and distribution of AI technologies to carefully consider ethical issues that will arise in the use of these technologies.

The sections below briefly consider many major ethical issues arising from the growth of AI. The sections are loosely ordered based on immediacy: earlier sections cover issues that already exist, while later sections cover issues that are only beginning to arise or may arise in the future. Suggestions for further reading are given at the end of each section.

## Algorithmic Bias

**Algorithmic bias** occurs when the outputs of an AI algorithm are unfairly biased against a certain group of people. One important way to help avoid algorithmic bias is to remove extraneous information from the data fed into AI systems. For example, in an AI system used for determining credit scores, the gender of creditees should be included neither in the data used to train the system nor in the data used in assessing particular creditees. However, this alone is not sufficient to guarantee a lack of algorithmic bias. For example, even if an algorithm does not explicitly consider a characteristic like gender or race, it may consider another characteristic that happens to closely correlated with race or gender. These are known as **proxy metrics**. Zip codes, for example, can be proxy metrics for race if living in a certain zip code is statistically correlated with being of a certain race.

Another source of algorithmic bias is due instead to a lack of information in the training data. If certain types of examples are not sufficiently represented in the training data, the AI system will be less accurate in classifying new instances of that type. This occurred, for example, in AI facial recognition systems developed by Microsoft and IBM which were found in a [2018 study](https://proceedings.mlr.press/v81/buolamwini18a/buolamwini18a.pdf) to be less accurate for darker-skinned females, as a result of a lack of representation in the training data.

It is important to perform careful statistical analyses on the outputs of AI algorithms to try to detect and minimize any algorithmic bias that may be present.

### Further Reading on Algorithmic Bias

- Kordzadeh, N. & Ghasemaghaei, M. (2022). Algorithmic bias: review, synthesis, and future research directions. *European Journal of Information Systems 31* (3): 388-409. DOI: 10.1080/0960085X.2021.1927212.
- Fazelpour, S. & Danks, D. (2021). Algorithmic bias: Senses, sources, solutions. *Philosophy Compass 16* (8): 1-16. DOI: 10.1111/phc3.12760.

## Ethical Data Collection

There are important ethical considerations governing the collection of data fed into AI systems. An important factor in determining whether it is ethical to input some data into an AI system is the consent of the party that is the source of that data. In the context of sourcing training data, consent can be modelled on a spectrum. In the clearest case where consent is present, the source of the data (e.g. the person in a photograph) has explicitly agreed to allow this particular use of their data. In the clearest case where consent is not present, the data has been taken from a private source without the knowledge of the party involved or against their explicit desires. Most actual uses of data will fall somewhere in the middle of this spectrum. For example, much of the data used to train [ChatGPT](https://www.codecademy.com/resources/docs/ai/chatgpt) was sourced from public webpages. This data collection was not used on a private source, but also was not, in most cases, an explicitly agreed upon use of the data in question.

There is a clear trade-off between the practical issue of gathering a sufficient quantity and range of data to develop a useful AI model, and the ethical issue of gathering the consent of the parties that are the source of the data. AI ethicists and developers of AI systems must consider what kinds of practices are acceptable in making these trade-offs. One practice that is gaining widespread adoption is allowing users to explicitly opt-out of data collection for AI systems, and to request the removal of their data that is already in such systems.

### Further Reading on Ethical Data Collection

- Jones, M. L.; Kaufman, E.; & Edenberg, E. (2018). AI and the Ethics of Automating Consent. *IEEE Security & Privacy 16* (3): 64-72. DOI: 10.1109/MSP.2018.2701155.

## AI and Privacy

AI is increasingly successful at identifying people, using biomedical and digital techniques, such as facial recognition and "digital fingerprinting" or internet activity analysis. This success raises ethical issues of privacy. Widespread adoption of facial recognition technologies in public spaces, for example, could effectively end the ability to travel in public anonymously. Already, facial recognition software, sold by companies like [Clearview AI](https://www.clearview.ai/) is being used in law enforcement and military applications. Critics of these uses of AI point to the potential for misuse of these technologies, e.g. by authoritarian governments to surpress political opposition.

### Further Reading on AI and Privacy

- Macnish, K. (2018). *The Ethics of Surveillance: An Introduction*. Routledge Press. 
- Stahl, B.C. & Wright, D. (2018). Ethics and Privacy in AI and Big Data: Implementing Responsible Research and Innovation. *IEEE Security & Privacy 16* (3): 26-33. DOI: 10.1109/MSP.2018.2701164.

## Interpretability and Explainable AI

In a traditional computer program, one can trace back any output of the program through a series of steps to understand how and why the program came to that output (or, at least, someone with access to the source code and a sufficient grasp of it could do so). However, with certain AI algorithms, such as deep learning methods, this is not currently possible. The problem is that when data is fed into a deep learning system, that input passes through hidden layers of nodes. These layers perform thousands of computations in a manner that is not predictable in advance. Moreover, the inner meaning of the path that the input takes through these hidden layers is not known by the human programmer. The result is that it may be difficult to explain why the system classified a certain input in the way that it did.

The difficulties in interpreting the output of AI systems leads to several ethical challenges. For example, it is plausible that, in certain situations, people affected by the decisions of AI systems have a right to an explanation of the reasons for these decisions. A criminal defendent whose bail is set by an AI algorithm seems to be owed some explanation of why the bail is set at that particular amount, for instance. The "right to explanation" has been legally codified for particular situations in various countries, including the US (in the Equal Credit Opportunity Act) and France (in the Digital Republic Act). The right to explanation implies that AI systems ought not to be used in certain circumstances if the outputs of these systems cannot be explained by relevant authorities.

Another challenge arising from lack of AI interpretability is the inability to cross-check the decisions of AI systems using human reasoning. Suppose that an AI system is used to forecast how much of a certain material a company should order, and that, on a particular occasion, it makes a surprisingly large recommendation. If employees at the company are unable to understand the reasons behind that particular recommendation, they will be unable to assess those reasons and therefore be unable to know whether to trust the recommendation. This issue will only become more pressing as more and more important decisions are delegated to AI systems (e.g. in military and medical contexts).

The goal of **Explainable AI (XAI)** is to develop techniques for explaining the processes and outputs of AI systems, thereby addressing the challenges above. Some of the techniques currently used in XAI are explained in the course linked below this article.

### Further Reading on Interpretability and Explainable AI

- Gunning, D. et al (2019). XAI — Explainable artificial intelligence. *Science Robotics 4* (37): 1-2. DOI: 10.1126/scirobotics.aay7120.
- Fleisher, W. (2022). Understanding, Idealization, and Explainable AI. *Episteme 19* (4): 534-560. DOI: 10.1017/epi.2022.39.

## The Ethics of Robotic AI

**Robotic AI** refers to AI software that is embodied in a physical device and given the ability to control that device. Different ethical considerations apply depending on the nature of the device in question. The sections below discuss two ethically significant types of robotic AI.

### Autonomous Vehicles

Autonomous vehicles use AI software to control a vehicle, such as a car, ship, or airplane with little or no human input. This offers several potential benefits over human-controlled vehicles, such as increased fuel efficiency, reduced need for parking in dense urban areas, reduced injuries and fatalities due to collisions, and reduced traffic congestion enabled by the ability to synchronize autonomous vehicles.

Autonomous vehicles also raise important ethical issues, however. Some of the benefits of autonomous vehicles listed above require there to be few or no human drivers sharing roadways with autonomous vehicles. For example, even a few human drivers could drastically reduce the ability to synchronize dense traffic at high speeds on major roadways. And if autonomous vehicles do eventually significantly reduce the rate of collisions, there will be considerable pressure to eliminate human drivers entirely. The benefits of eliminating human drivers will have to be weighed carefully against the costs to human autonomy and freedom that this entails.

Another ethical issue arising from autonomous vehicles concerns how such vehicles should distribute the risks of injury if a collision is inevitable. An autonomous vehicle may be in a situation where it can avoid harm to human passengers only by injuring nearby pedestrians, for example. The ethical issues involved here closely resemble those discussed in the ethical literature on the [trolley problem](https://www.cambridge.org/9781009255622).

### Robotic Sex Dolls

As AI advances, the prospect that it will be used to develop increasingly realistic synthetic sex dolls seems likely. The effects that this may have on human relationships and the psychological effects of such technology on its users should be carefully considered to assess what, if any, limits should govern its development and distribution.

### Further Reading on the Ethics of Robotic AI

- Lin, P.; Abney, K.; & Jenkins, R. (eds.) (2017). *Robot Ethics 2.0: From Autonomous Cars to Artificial Intelligence*. Oxford University Press. DOI: 10.1093/oso/9780190652951.001.0001.
- Danaher, J. & McArthur, N. (eds.) (2018). *Robot Sex: Social and Ethical Implications*. MIT Press.

## AI Automation and Employment

AI may be capable of automating many forms of work currently done by humans. Autonomous vehicles, for example, will be able to do work currently done by human drivers, and large language models are already beginning to perform at near human levels in many tasks involving writing, programming, and data analysis, for example.

AI automation is likely to increase overall productivity and thereby increase the overall wealth of societies. However, it remains to be seen whether this increased wealth can be justly distributed by present economic policies, or whether radically new policies will need to be devised for these technological developments.

It also remains to be seen whether AI automation will complement human work and create new opportunities for human employment, or whether it will merely replace existing human jobs. And if the latter, will the results be a loss of human dignity, autonomy, and meaning, or will we be able to find these qualities in leisure and social activities outside of economic production? These issues should be carefully considered by leaders in AI development. Notably, in March of 2023 many of these leaders did in fact sign an [open letter](https://futureoflife.org/open-letter/pause-giant-ai-experiments/) calling for a pause on AI development to allow these and other issues to be further considered.

### Further Reading on AI Automation and Employment

- Danaher, J. (2019). *Automation and Utopia: Human Flourishing in a World without Work*. Harvard University Press. DOI: 10.4159/9780674242203
- Parr, T. (2022). Automation, Unemployment, and Taxation. *Social Theory and Practice 48* (2): 357-378. DOI: 10.5840/soctheorpract202231159

## Value Alignment

The challenge of **value alignment** (also sometimes called **machine ethics**) is to develop AI systems that have ethical values that match human values.  This challenge can be broken down into two sub-problems:

1. *The ethical problem of value alignment*: Which ethical principles and values should govern the decision-making of AI systems?
2. *The technical problem of value alignment*: How can the ethical principles and values above be implemented into AI systems?

Any solution to the ethical problem will be contentious, since the question of which ethical principles and values should be adopted in general is the topic of ethics as a whole and there is no concensus on these matters. In practice, AI developers may want to try to implement fairly simple and uncontroversial ethical principles, such as *do not bring about an outcome by causing harm, when that same outcome can be brought about without causing harm*.

There are two current approaches to the technical problem. The first is the **top-down approach**. On this approach, one tries to directly program ethical principles and values into the decision-making procedures of AI systems. The second approach is the **bottom-up approach**. On this approach, one trains a [neural network](https://www.codecademy.com/resources/docs/ai/neural-networks) on data in which decisions are coded as ethical or unethical based on the values one wants to implement. With sufficient training, the AI model should be able to classify new instances as ethical or unethical in accordance with those values. This model can then be used to constrain the outputs of another AI system.

### Further Readings on Value Alignment

- Anderson, M. & Anderson, S.L. (eds.) (2011). *Machine Ethics*. Cambridge University Press. DOI: 10.1017/CBO9780511978036.
- Powers, T. (2011). Incremental Machine Ethics. *IEEE Robotics & Automation Magazine 18* (1): 51-58. DOI: 10.1109/MRA.2010.940152.

## AI Rights

The previous sections discussed the impacts of AI on human interests. But there are also ethical questions concerning when AI systems should be considered to have interests of their own. Ethicists use the term **moral patients** to refer to entities that are capable of having moral rights.

What it takes to be moral patient is a matter of dispute in ethics. However, it is plausible that it is at least necessary (if not sufficient) for being a moral patient that one have conscious states. Thus, the issue of AI rights is entangled with difficult questions regarding what it takes to be conscious and how consciousness should be tested for.

### Further Reading on AI Rights

- Hildt, E. (2023). The Prospects of Artificial Consciousness: Ethical Dimensions and Concerns. *AJOB Neuroscience 14* (2): 58-71. DOI: 10.1080/21507740.2022.2148773.
- Schwitzgebel, E. & Garza, M. (2015). A Defense of the Rights of Artificial Intelligences. *Midwest Studies in Philosophy 39* (1): 98-119. DOI: 10.1111/misp.12032.

## The Singularity

Some theorists argue that as AI systems become more intelligent, they will eventually be capable of producing even more powerful and intelligent AI systems. This process, they posit, will lead to an exponential growth in the power of AI systems until they far exceed the intelligence and power of anything humanly conceivable. This hypothesized event is known as **The Singularity**.

It should be noted that the argument that The Singularity will eventually occur is not airtight. It is possible, for example, that the current methods used in AI can only produce systems of a certain level of intelligence, and that these systems will not themselves be intelligent enough to devise radically new AI techniques.

Supposing that The Singularity will occur, it is crucial that these superintelligent AI systems be properly aligned with human ethical values. Some ethicists argue that one of humanity's top priorities should be mitigating the existential risks posed by superintelligent AI.

### Further Reading on The Singularity

- Bostrom, N. (2014). *Superintelligence: Paths, Dangers, Strategies*. Oxford University Press.
- Chalmers, D. (2010). The Singularity: A Philosophical Analysis. *Journal of Consciousness Studies 17* (9-10): 7-65.