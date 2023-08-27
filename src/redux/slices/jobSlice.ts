import { Job } from "@/components/job-card";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import jobs from "@/data/jobs.json";

export interface JobState {
  allJobs: Job[];
  filteredJobs: Job[];
  filteredKeywords: string[];
}

const initialState: JobState = {
  allJobs: jobs,
  filteredJobs: jobs,
  filteredKeywords: [],
};

const ALL_ROLES = Array.from(new Set(jobs.map((obj) => obj.role)));
const ALL_LEVELS = Array.from(new Set(jobs.map((obj) => obj.level)));
const ALL_LANGUAGES = Array.from(
  new Set(jobs.map((obj) => obj.languages).flat())
);
const ALL_TOOLS = Array.from(new Set(jobs.map((obj) => obj.tools).flat()));

export const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    addFilter: (state, { payload }: PayloadAction<string>) => {
      // If filter already applied then don't add again.
      if (state.filteredKeywords.includes(payload)) {
        return;
      }

      let insertAt = state.filteredKeywords.length;
      let shouldReplace = 0;

      // If same role or level already applied then replace it.
      if (ALL_ROLES.includes(payload)) {
        const roleAlreadyExists = state.filteredKeywords.findIndex((obj) =>
          ALL_ROLES.includes(obj)
        );

        if (roleAlreadyExists !== -1) {
          insertAt = roleAlreadyExists;
          shouldReplace = 1;
        }
      } else if (ALL_LEVELS.includes(payload)) {
        const levelAlreadyExists = state.filteredKeywords.findIndex((obj) =>
          ALL_LEVELS.includes(obj)
        );

        if (levelAlreadyExists !== -1) {
          insertAt = levelAlreadyExists;
          shouldReplace = 1;
        }
      }

      state.filteredKeywords.splice(insertAt, shouldReplace, payload);
    },
    removeFilter: (state, { payload }: PayloadAction<string>) => {
      state.filteredKeywords = state.filteredKeywords.filter(
        (item) => item !== payload
      );
    },
    clearFilter: (state) => {
      state.filteredKeywords = [];
    },
    calculateFilteredJobs: (state) => {
      state.filteredJobs = [...state.allJobs];

      // If no filters are selected, then it will be all Jobs.
      if (state.filteredKeywords.length < 0) {
        return;
      }

      // If role is added into filter, then filter by roles.
      const selectedRole = state.filteredKeywords.find((obj) =>
        ALL_ROLES.includes(obj)
      );

      if (selectedRole) {
        state.filteredJobs = state.filteredJobs.filter(
          (job) => job.role === selectedRole
        );
      }

      // If level is added into filter, then filter by level.
      const selectedLevel = state.filteredKeywords.find((obj) =>
        ALL_LEVELS.includes(obj)
      );

      if (selectedLevel) {
        state.filteredJobs = state.filteredJobs.filter(
          (job) => job.level === selectedLevel
        );
      }

      // If languages are added into filter, then filter them.
      const selectedLanguages = state.filteredKeywords.filter((obj) =>
        ALL_LANGUAGES.includes(obj)
      );
      if (selectedLanguages.length > 0) {
        state.filteredJobs = state.filteredJobs.filter((job) =>
          selectedLanguages.every((item) => job.languages.includes(item))
        );
      }

      // If tools are added into filter, then filter them.
      const selectedTools = state.filteredKeywords.filter((obj) =>
        ALL_TOOLS.includes(obj)
      );
      if (selectedTools.length > 0) {
        state.filteredJobs = state.filteredJobs.filter((job) =>
          selectedTools.every((item) => job.tools.includes(item))
        );
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addFilter, removeFilter, clearFilter, calculateFilteredJobs } =
  jobSlice.actions;

export default jobSlice.reducer;
