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
    calculateFilteredJobs: (state) => {},
  },
});

// Action creators are generated for each case reducer function
export const { addFilter, removeFilter, clearFilter, calculateFilteredJobs } =
  jobSlice.actions;

export default jobSlice.reducer;
