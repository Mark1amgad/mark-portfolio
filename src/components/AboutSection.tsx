import { motion } from "framer-motion";
import { Linkedin, Github, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpeg";

const AboutSection = () => {
  return (
    <section id="about-section" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A quick look at who I am and what drives me.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-[auto_1fr] gap-12 items-center">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-primary/40 blur-lg" />
              <img
                src={profilePhoto}
                alt="Mark Amgad Nassief"
                className="relative w-56 h-56 md:w-64 md:h-64 rounded-full object-cover border-4 border-primary/50"
              />
            </div>
          </motion.div>

          {/* Bio & Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm <span className="text-foreground font-semibold">Mark Amgad Nassief</span>, an AI Engineering student passionate about building intelligent software solutions. From embedded systems and desktop apps to web platforms and data dashboards, I enjoy turning ideas into polished, real-world products. I'm always exploring new technologies and looking for opportunities to grow and collaborate.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button asChild variant="outline" className="gap-2">
                <a
                  href="https://www.linkedin.com/in/markk-amgad"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>
              </Button>
              <Button asChild variant="outline" className="gap-2">
                <a
                  href="https://github.com/Mark1amgad"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={18} />
                  GitHub
                </a>
              </Button>
              <Button asChild className="gap-2">
                <a href="/files/resume.pdf" download>
                  <Download size={18} />
                  Download Resume
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
