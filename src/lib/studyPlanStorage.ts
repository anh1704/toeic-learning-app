import * as FileSystem from "expo-file-system/legacy";

export type DailyScheduleItem = {
  title: string;
  startTime: string;
  duration: string;
  color: string;
};

export type DailyScheduleData = {
  generatedAt: string;
  settings: {
    targetScore: string;
    durationMonths: number;
    dailyStudyTime: string;
    focusAreas: string[];
  };
  todayStudyTime: string;
  progressPercent: number;
  items: DailyScheduleItem[];
};

const FILE_NAME = "study_plan_daily.json";

const getFileUri = () => {
  const baseDir = FileSystem.documentDirectory ?? FileSystem.cacheDirectory;
  if (!baseDir) {
    throw new Error("No writable directory available");
  }
  return `${baseDir}${FILE_NAME}`;
};

export const getStudyPlanFileUri = () => getFileUri();

export const saveDailySchedule = async (data: DailyScheduleData) => {
  await FileSystem.writeAsStringAsync(getFileUri(), JSON.stringify(data), {
    encoding: FileSystem.EncodingType.UTF8,
  });
};

export const loadDailySchedule = async (): Promise<DailyScheduleData | null> => {
  const uri = getFileUri();
  const info = await FileSystem.getInfoAsync(uri);
  if (!info.exists) return null;

  const content = await FileSystem.readAsStringAsync(uri, {
    encoding: FileSystem.EncodingType.UTF8,
  });

  return JSON.parse(content) as DailyScheduleData;
};
