import { MotionConfig } from "motion/react";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router";
import AppLayout from "./component/layouts/app-layout";
import ProjectLayout from "./component/layouts/ProjectLayout";
import ScrollToTop from "./component/scroll-to-top";
import SmoothScroll from "./component/smooth-scroll";
import Home from "./pages/Home";
import Project from "./pages/Project";

const AppRoutes = () => {
    return (
        <Router>
            <SmoothScroll>
                <ScrollToTop />
                <MotionConfig transition={{ ease: "easeOut" }}>
                    <Routes>
                        <Route element={<AppLayout />}>
                            <Route index element={<Home />} />
                            <Route path="projects" element={<ProjectLayout />}>
                                <Route path=":slug" element={<Project />} />
                            </Route>
                        </Route>

                        {/* Catch all unmatched routes */}
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </MotionConfig>
            </SmoothScroll>
        </Router>
    );
};

export default AppRoutes;
