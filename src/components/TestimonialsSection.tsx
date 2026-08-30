import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MessageSquareQuote, ChevronDown, ChevronUp } from "lucide-react";

const testimonials = [
  { author: "Sooraj S S", company: "Urban Ladder", title: "Head of Creative & Brand", quote: "Karan has been a leading support to the interactive design development at LIDO. Having worked with him on multiple projects, there is always a sense of exploration and perfection that Karan brings to the table. He is eager to try new things and shine as a key stakeholder in any task assigned to him. What struck out most to me throughout our course of interaction is his ability to grasp new opportunities, learn from them and educate others about its possibilities. It has been my pleasure to work with him and I hope to do so again." },
  { author: "Kanchan Shine", company: "HurixDigital", title: "Chief Learning and Innovation Officer", quote: "At LIDO, Karan was one of the most dependable Sr. Interactive Designer. He is sincere, committed and always keen to learn. Karan proactively researched and built cool activity templates and functionalities, which the content team could use. He takes feedback constructively and strives to do better each time. He has great team spirit and is a pleasure to have on the team!" },
  { author: "Piyush Garud", company: "Girl Effect", title: "Production Manager", quote: "Karan is an excellent interactive designer. I had the pleasure of working with him in Lido learning and time and again he proved himself to good at what he does. Would highly recommend Karan, if you're looking at developing content based in interactive design." },
  { author: "Avi Singh Gehlote", company: "Goodera", title: "Senior Manager, Content & Design", quote: "Undaunted equals Karan. From doing his job efficiently to coming up with new ways of innovation, he stops at nothing. He is the go-to guy for anything new we want to explore and introduce in the product. He braves all that comes his way, and with a smile." },
  { author: "Rhea Sethna", company: "Ashoka", title: "Senior Partnerships Manager, Climate & Companies", quote: "Karan joined Lido at a time when we were just building out our new interactive formats. In a short time, he became a pillar of support for the team - thanks to a keen understanding of his tools and his enthusiasm to explore and innovate with his work. He has been a strong and dedicated person at Lido, and we are happy to have him on the team!" },
  { author: "Rezaul Karim, Ph.D.", company: "ALDI DX", title: "Lead Data Scientist", quote: "I had the great opportunity working with Mr. Karan on a book project titled \"Hands-on Deep Learning for IoT\" published by PACKT Publishing Ltd. Notably, he worked as the Content Development Editor and it was a great experience working with him. Apart from this, our academic and research discussion related to web application development, data science, and other emerging technologies also grew and got more involved over time which showed his clear interest in acquiring the skills in these areas. Throughout the book publications, I have worked with other editors in PACKT Publishing. Each of them is unique in their way. However, working with Karan has been a real privilege and I rate him amongst top editors in PACKT. 'Highly efficient' is probably the phrase that comes to mind when I think about Karan. I was particularly mesmerized by his ability and the way he handled all the technical stuff in the book. In a nutshell, he's definitely in Top 1% professional in his area with the positive attitude, motivation, team player, structured thinking and communication skills." },
  { author: "Saransh Mehta", company: "Oracle", title: "Applied Scientist III - Language AI Services", quote: "Karan is an exceptionally helpful personality. He very well understands the responsibilities attached with publishing a book. He is equipped with multiple skills such as IOT, Artificial Intelligence, Web development which aids him to provide super smooth technical assistance to the authors. It was pleasure working and I wish him best of luck for his future endeavours! Regards, Saransh Mehta" },
  { author: "Chuanfeng Zhang", company: "Facebook", title: "Software Engineer", quote: "Karan is the content development editor for my book titled 'Hyperledger Cookbook' which I co-authored. He effectively coordinates between author team, editor team, and reviewer team to ensure the book successfully published as schedule. He also promptly responds and actively works on solution to the issues during the project development. He is hard working, professional and amazing person to work with." },
  { author: "Brian Wu", company: "JPMorgan Chase & Co.", title: "Senior blockchain architect", quote: "I've worked with Karan on one of my books, as a content development editor, Karan shows his efficient, work hard to keep the project in-line and are excellent in communication. It was a great pleasure to work with him." },
  { author: "Amita Kapoor", company: "Retired", title: "Co-Founder", quote: "I worked with Karan during the writing of my book Hands on Artificial Intelligence for IoT, the whole work took about a year. And for that whole year, Karan was my point of contact with Packt Publishers. I would bug him on weekends, and he very professionally was always quick in responding back. No matter what the issue, he would give his best to resolve it. It was a pleasure working with him. His people's skills are great and he would be an asset to any organization. I wish him all the best." },
  { author: "Kishore Ayyadevara", company: "Penguin Ai", title: "Co-Founder & Chief AI officer", quote: "I worked with Karan where he was the CDE for the \"Neural Networks with Keras\" book that I was authoring. Karan was extremely helpful in accommodating my requests as much as possible and did his best to get the book into a good shape. He was able to work, delegate and get the required work done even when he was not keeping good health, which speaks volumes about his commitment. I would love to work with Karan again." },
  { author: "Rahul Kumar", company: "IBM", title: "AI Engineering Leader- Watsonx", quote: "I connected with Karan while I was penning a book for Packt. Post so many interactions, I can say that Karan is a focused, detail oriented professional who knows what it takes to get the job done. Also, he is fully aware of his craft and was great in providing me his feedback since it happened to be my first stint at professional writing. Also, he is fascinated by technology, so he asked me good questions to make the book look better. I wish him all the very best in his future assignments. Keep up the great work rolling from your end" },
  { author: "Harish Garg", company: "MCP Stack", title: "Founder", quote: "I worked with Karan towards the publication of my book by Packt Publishing and it was a delightful experience. Karan is a very detailed oriented individual. He is very hard-working and is not afraid put in extra time or effort to make sure a quality product is released and on-time. He is a great team player. His grasp on the technical concepts are very good. Look forward to working with him soon in future." },
  { author: "Giuseppe Ciaburro, PhD", company: "Pegaso University", title: "Associate Professor", quote: "I worked with Karan for the publication of my book with Packt Publishing. Karan was the content development editor, so I could appreciate Karan's skills. It has proven capable of enhancing the contents proposed by the author without prevaricating in the competences of their respective roles. He was able to motivate the author throughout the book drafting process, providing valuable advice when necessary." },
  { author: "Lauri Lehman", company: "Zure Ltd", title: "Data Scientist", quote: "Karan managed the editing process for the book I was co-writing. He provided help when I needed and was easy to get in touch with. He also made sure that the project was finished in quick schedule. Thanks for collaboration Karan!" },
  { author: "Vitor Bianchi Lanzetta", company: "Bluefit Academia", title: "Coordenador de Dados", quote: "I am glad I could work with him. He always came with good suggestions by the time \"Hands-on Data Science with R\" was being written." },
  { author: "Matthew Lamons", company: "The Intelligence Factory", title: "Executive Chairman", quote: "I was happy to have Karan Thakkar as my primary source of contact and my content development editor for my first book! He was very helpful and encouraging and made the process run smoothly and our book a success." },
  { author: "Bellaj Badr", company: "Mchain", title: "CTO & Blockchain Architect", quote: "I had the pleasure of working with Karan, when I was writing my book \"Blockchain By Example\". During that time, I have recognized in him a dedication to providing professional help. Karan is a professional content editor, who is ready to give his best to get the work done. He helped in driving the book writing project forward through coming up with interesting ideas. I am sure that any author would be lucky to work with Karan." },
  { author: "Anurag Srivastava", company: "Daikin", title: "Senior Product Manager", quote: "I have worked with Karan for my book 'Mastering Kibana 6.x'. He was working as a Content Development Editor for the book and it was fun working with him. He is very supportive and has good understanding on the subject. I would love to work with him again. All the best for your future. :)" },
  { author: "Joshua Newnham", company: "Apple", title: "Machine Learning Engineer", quote: "I had the pleasure of working with Karan during my book Machine Learning with Core ML. Not only is Karan professional and committed (frequently replying to emails posted late at night and during the weekend) but also encouraging and pragmatic. The best way I could sum up my experience and opinion of Karan is to say that I look forward to working with him again sometime in the near future." }
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [showAll, setShowAll] = useState(false);

  const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, 6);

  return (
    <section id="testimonials" ref={ref} className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="text-xs font-mono text-primary uppercase tracking-[0.2em]">// testimonials</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3">
            LinkedIn <span className="text-gradient">Recommendations</span>
          </h2>
          <p className="text-muted-foreground mt-3 text-sm">What {testimonials.length} colleagues and clients have to say</p>
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {displayedTestimonials.map((t, i) => (
            <div key={i} className="break-inside-avoid">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: (i % 6) * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl glass hover:glow-primary transition-all relative h-full flex flex-col"
              >
                <MessageSquareQuote size={40} className="text-primary/10 absolute top-6 right-6" />
                <p className="text-foreground/80 italic mb-6 relative z-10 leading-relaxed flex-1 text-sm md:text-base">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-10 h-10 shrink-0 rounded-full glass-strong flex items-center justify-center text-primary font-bold">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-sm text-foreground">{t.author}</div>
                    <div className="text-xs font-mono text-muted-foreground line-clamp-1">{t.title}</div>
                    <div className="text-[10px] uppercase font-bold text-primary/70 mt-0.5">{t.company}</div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {testimonials.length > 6 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-12 flex justify-center"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 rounded-full glass-strong hover:glow-primary transition-all flex items-center gap-2 text-primary font-medium text-sm"
            >
              {showAll ? (
                <>Show Less <ChevronUp size={16} /></>
              ) : (
                <>Read All {testimonials.length} Recommendations <ChevronDown size={16} /></>
              )}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
