import React from "react";
import style from "../style/githubPages.module.scss";
import { useSelector } from "react-redux";
import Loading from "../components/loading";
import {
  getGithubProfile,
  setUserName,
  setError,
} from "../features/githubSlice";
import { RootState, useAppDispatch } from "../store";
import Layout from "../components/layout";
import moment from "moment";
import Commit from "../components/commit";
import { githubRepo } from "../lib/interfaces";

const GitHubPage = () => {
  const { userName, githubRepo, isLoading, error } = useSelector(
    (state: RootState) => state.github
  );
  const dispatch = useAppDispatch();

  const getProfile = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (userName === null || userName === "") {
      dispatch(setError("Please input name..."));
    } else {
      await dispatch(getGithubProfile(userName));
    }
  };

  return (
    <Layout>
      <>
        <form>
          <label className={style.labelGithub}>Check your profile:</label>
          <div className={style.formGithub}>
            <input
              className={style.inputGithub}
              type="text"
              value={userName}
              onChange={(e) => dispatch(setUserName(e.target.value))}
            />
            <button className={style.buttonGithub} onClick={(e) => getProfile(e)}>
              {isLoading ? <Loading /> : `Fetch`}
            </button>
          </div>
            {error && error}
        </form>
        <main>
          <h2>
            {githubRepo &&
              githubRepo.data?.map((item: githubRepo) => (
                <Commit
                  key={item.id}
                  comment={item.description ? item.description : ""}
                  name={item.name}
                  date={moment(item.updated_at).format("L")}
                />
              ))}
          </h2>
        </main>
      </>
    </Layout>
  );
};
export default GitHubPage;
