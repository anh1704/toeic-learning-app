import React, { useEffect, useRef, useState } from "react";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ActivityIndicator, Image, View } from "react-native";
import ListeningHome from "./src/screens/ListeningHome";
import ListeningPart1 from "./src/screens/ListeningPart1";
import ListeningPart11 from "./src/screens/ListeningPart11";
import ListeningPart1Result from "./src/screens/ListeningPart1Result";
import ListeningPart2 from "./src/screens/ListeningPart2";
import ListeningPart21 from "./src/screens/ListeningPart21";
import ListeningPart2Result from "./src/screens/ListeningPart2Result";
import ListeningPart3 from "./src/screens/ListeningPart3";
import ListeningPart31 from "./src/screens/ListeningPart31";
import ListeningPart3Result from "./src/screens/ListeningPart3Result";
import ListeningDictation from "./src/screens/ListeningDictation";

import ListeningHistory from "./src/screens/ListeningHistory";
import ListeningTips from "./src/screens/ListeningTips";
import AudioControl from "./src/screens/AudioControl";
import StudyPlan from "./src/screens/StudyPlan/index";
import StudyPlanCreate from "./src/screens/StudyPlanCreate";
import StudyPlanDaily from "./src/screens/StudyPlanDaily";
import StudyPlanWeekly from "./src/screens/StudyPlanWeekly";
import StudyPlanGoals from "./src/screens/StudyPlanGoals";
import StudyPlanMilestones from "./src/screens/StudyPlanMilestones";
import StudyPlanReminders from "./src/screens/StudyPlanReminders";
import ResourcesHome from "./src/screens/ResourcesHome";
import ResourcesVideo from "./src/screens/ResourcesVideo";
import ResourcesVideo2 from "./src/screens/ResourcesVideo2";
import ResourcesTips from "./src/screens/ResourcesTips";
import ResourcesDownloads from "./src/screens/ResourcesDownloads";
import Community from "./src/screens/Community";
import CommunityForum from "./src/screens/CommunityForum";
import CommunityGroups from "./src/screens/CommunityGroups";
import CommunityChat from "./src/screens/CommunityChat";
import CommunityRanking from "./src/screens/CommunityRanking";
import Vocabulary from "./src/screens/Vocabulary";
import VocabularyFlashcards from "./src/screens/VocabularyFlashcards";
import VocabularyQuiz from "./src/screens/VocabularyQuiz";
import VocabularyQuizResult from "./src/screens/VocabularyQuizResult";
import VocabularyGame from "./src/screens/VocabularyGame";
import VocabularyMyWordList from "./src/screens/VocabularyMyWordList";
import VocabularyWordOfDay from "./src/screens/VocabularyWordOfDay";
import VocabularyPronunciation from "./src/screens/VocabularyPronunciation";
import VocabularySpacedRepetition from "./src/screens/VocabularySpacedRepetition";
import Reading from "./src/screens/Reading";
import ReadingGrammar from "./src/screens/ReadingGrammar";
import ReadingPart5 from "./src/screens/ReadingPart5";
import ReadingTips from "./src/screens/ReadingTips";
import ReadingTipDetail from "./src/screens/ReadingTipDetail";
import Grammar from "./src/screens/Grammar";
import GrammarComparison from "./src/screens/GrammarComparison";
import GrammarMistakes from "./src/screens/GrammarMistakes";
import GrammarLessons from "./src/screens/GrammarLessons";
import GrammarDetail from "./src/screens/GrammarDetail";
import Profile from "./src/screens/Profile";
import ProfileEdit from "./src/screens/ProfileEdit";
import ProfileSettings from "./src/screens/ProfileSettings";
import ProfileNotifications from "./src/screens/ProfileNotifications";
import ProfileSubscription from "./src/screens/ProfileSubscription";
import HomeScreen from "./src/screens/Home";
import Tests from "./src/screens/Tests";
import TestsMini from "./src/screens/TestsMini";
import TestsFull from "./src/screens/TestsFull";
import TestsInProgress from "./src/screens/TestsInProgress";
import TestsResultSumary from "./src/screens/TestsResultSumary";
import AuthLogin from "./src/screens/AuthLogin";
import AuthRegister from "./src/screens/AuthRegister";
import DailyTaskDetail from "./src/screens/DailyTaskDetail";
import Notifications from "./src/screens/Notifications";
import ReadingExercise from "./src/screens/ReadingExercise";
import ReadingSkimScanPractice from "./src/screens/ReadingSkimScanPractice";
import ReadingResult from "./src/screens/ReadingResult";
import CommunityPost from "./src/screens/CommunityPost";
import CommunityCreatePost from "./src/screens/CommunityCreatePost";
import VocabularyTopic from "./src/screens/VocabularyTopic";
import VocabularyDetail from "./src/screens/VocabularyDetail";
import Achievements from "./src/screens/Achievements";
import AchievementsChallenges from "./src/screens/AchievementsChallenges";
import AchievementsStreak from "./src/screens/AchievementsStreak";
import AchievementsStore from "./src/screens/AchievementsStore";
import AchievementsBadges from "./src/screens/AchievementsBadges";
import NotificationDetail from "./src/screens/NotificationDetail";
import { supabase } from "./src/lib/supabase";

export type RootStackParamList = {
  ListeningHome: undefined;
  ListeningPart1: undefined;
  ListeningPart11: { examId: string };
  ListeningPart1Result:
    | {
        answers?: Array<number | null>;
        correctAnswers?: number[];
      }
    | undefined;
  ListeningPart2: undefined;
  ListeningPart21: { examId: string };
  ListeningPart2Result:
    | {
        answers?: Array<number | null>;
        correctAnswers?: number[];
      }
    | undefined;
  ListeningPart3: undefined;
  ListeningPart31: { examId: string };
  ListeningPart3Result:
    | {
        results: boolean[];
      }
    | undefined;
  ListeningDictation: undefined;

  ListeningHistory: undefined;
  ListeningTips: undefined;
  AudioControl: undefined;
};

export type AppRootStackParamList = {
  Tabs: undefined;
  AuthLogin: undefined;
  AuthRegister: undefined;
  Achievements: undefined;
  AchievementsChallenges: undefined;
  AchievementsStreak: undefined;
  AchievementsStore: undefined;
  AchievementsBadges: undefined;
  DailyTaskDetail: undefined;
  Notifications: undefined;
  NotificationDetail: undefined;
  StudyPlan: undefined;
  StudyPlanCreate: undefined;
  StudyPlanDaily: undefined;
  StudyPlanWeekly: undefined;
  StudyPlanGoals: undefined;
  StudyPlanMilestones: undefined;
  StudyPlanReminders: undefined;
  ResourcesHome: undefined;
  ResourcesVideo: undefined;
  ResourcesVideo2: undefined;
  ResourcesTips: undefined;
  ResourcesDownloads: undefined;
  Community: undefined;
  CommunityForum: undefined;
  CommunityGroups: undefined;
  CommunityChat: undefined;
  CommunityRanking: undefined;
  CommunityPost: undefined;
  CommunityCreatePost: undefined;
  Vocabulary: undefined;
  VocabularyMyWordList: undefined;
  VocabularyFlashcards: undefined;
  VocabularyQuiz: undefined;
  VocabularyQuizResult:
    | {
        items?: Array<{ word: string; isCorrect: boolean }>;
        topic?: string;
      }
    | undefined;
  VocabularyGame: undefined;
  VocabularyWordOfDay: undefined;
  VocabularyPronunciation: undefined;
  VocabularySpacedRepetition: undefined;
  VocabularyTopic: undefined;
  VocabularyDetail: undefined;
  ReadingGrammar: undefined;
  ReadingPart5: undefined;
  ReadingTips: undefined;
  ReadingTipDetail: undefined;
  ReadingExercise: undefined;
  ReadingResult:
    | {
        answers?: Array<number | null>;
        correctAnswers?: number[];
      }
    | undefined;
  ReadingSkimScanPractice: undefined;
  Grammar: undefined;
  GrammarComparison: undefined;
  GrammarMistakes: undefined;
  GrammarLessons: undefined;
  GrammarDetail: undefined;
  TestsMini: undefined;
  TestsFull: undefined;
  TestsInProgress: undefined;
  TestsResultSumary: undefined;
  ProfileEdit: undefined;
  ProfileSettings: undefined;
  ProfileNotifications: undefined;
  ProfileSubscription: undefined;
};

export type RootTabParamList = {
  Home: undefined;
  ListeningTab: undefined;
  Reading: undefined;
  Tests: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const AppStack = createNativeStackNavigator<AppRootStackParamList>();
const Tab = createBottomTabNavigator<RootTabParamList>();

const ListeningStack = () => {
  return (
    <Stack.Navigator id="ListeningStack" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ListeningHome" component={ListeningHome} />
      <Stack.Screen name="ListeningPart1" component={ListeningPart1} />
      <Stack.Screen name="ListeningPart11" component={ListeningPart11} />
      <Stack.Screen
        name="ListeningPart1Result"
        component={ListeningPart1Result}
      />
      <Stack.Screen name="ListeningPart2" component={ListeningPart2} />
      <Stack.Screen name="ListeningPart21" component={ListeningPart21} />
      <Stack.Screen
        name="ListeningPart2Result"
        component={ListeningPart2Result}
      />
      <Stack.Screen name="ListeningPart3" component={ListeningPart3} />
      <Stack.Screen name="ListeningPart31" component={ListeningPart31} />
      <Stack.Screen
        name="ListeningPart3Result"
        component={ListeningPart3Result}
      />
      <Stack.Screen name="ListeningDictation" component={ListeningDictation} />

      <Stack.Screen name="ListeningHistory" component={ListeningHistory} />
      <Stack.Screen name="ListeningTips" component={ListeningTips} />
      <Stack.Screen name="AudioControl" component={AudioControl} />
    </Stack.Navigator>
  );
};

const App = () => {
  const navigationRef = useRef<any>(null);
  const [isReady, setIsReady] = useState(false);
  const [initialRoute, setInitialRoute] = useState<"AuthLogin" | "Tabs">(
    "AuthLogin",
  );

  useEffect(() => {
    let isMounted = true;

    const bootstrap = async () => {
      try {
        const { data } = await supabase.auth.getSession();
        if (!isMounted) return;
        setInitialRoute(data.session ? "Tabs" : "AuthLogin");
      } catch (e) {
        console.error("[auth] getSession error:", e);
        if (!isMounted) return;
        setInitialRoute("AuthLogin");
      } finally {
        if (isMounted) setIsReady(true);
      }
    };

    bootstrap();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        const routeName = session ? "Tabs" : "AuthLogin";
        navigationRef.current?.reset({
          index: 0,
          routes: [{ name: routeName }],
        });
      },
    );

    return () => {
      isMounted = false;
      listener.subscription.unsubscribe();
    };
  }, []);

  if (!isReady) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FAF6F1",
        }}
      >
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <AppStack.Navigator
        id="AppStack"
        initialRouteName={initialRoute}
        screenOptions={{ headerShown: false }}
      >
        <AppStack.Screen name="AuthLogin" component={AuthLogin} />
        <AppStack.Screen name="AuthRegister" component={AuthRegister} />
        <AppStack.Screen name="Achievements" component={Achievements} />
        <AppStack.Screen
          name="AchievementsChallenges"
          component={AchievementsChallenges}
        />
        <AppStack.Screen
          name="AchievementsStreak"
          component={AchievementsStreak}
        />
        <AppStack.Screen
          name="AchievementsStore"
          component={AchievementsStore}
        />
        <AppStack.Screen
          name="AchievementsBadges"
          component={AchievementsBadges}
        />
        <AppStack.Screen name="Tabs" component={TabsNavigator} />
        <AppStack.Screen name="DailyTaskDetail" component={DailyTaskDetail} />
        <AppStack.Screen name="Notifications" component={Notifications} />
        <AppStack.Screen
          name="NotificationDetail"
          component={NotificationDetail}
        />
        <AppStack.Screen name="StudyPlan" component={StudyPlan} />
        <AppStack.Screen name="StudyPlanCreate" component={StudyPlanCreate} />
        <AppStack.Screen name="StudyPlanDaily" component={StudyPlanDaily} />
        <AppStack.Screen name="StudyPlanWeekly" component={StudyPlanWeekly} />
        <AppStack.Screen name="StudyPlanGoals" component={StudyPlanGoals} />
        <AppStack.Screen
          name="StudyPlanMilestones"
          component={StudyPlanMilestones}
        />
        <AppStack.Screen
          name="StudyPlanReminders"
          component={StudyPlanReminders}
        />
        <AppStack.Screen name="ResourcesHome" component={ResourcesHome} />
        <AppStack.Screen name="ResourcesVideo" component={ResourcesVideo} />
        <AppStack.Screen name="ResourcesVideo2" component={ResourcesVideo2} />
        <AppStack.Screen name="ResourcesTips" component={ResourcesTips} />
        <AppStack.Screen
          name="ResourcesDownloads"
          component={ResourcesDownloads}
        />
        <AppStack.Screen name="Community" component={Community} />
        <AppStack.Screen name="CommunityForum" component={CommunityForum} />
        <AppStack.Screen name="CommunityGroups" component={CommunityGroups} />
        <AppStack.Screen name="CommunityChat" component={CommunityChat} />
        <AppStack.Screen name="CommunityRanking" component={CommunityRanking} />
        <AppStack.Screen name="CommunityPost" component={CommunityPost} />
        <AppStack.Screen
          name="CommunityCreatePost"
          component={CommunityCreatePost}
        />
        <AppStack.Screen name="Vocabulary" component={Vocabulary} />
        <AppStack.Screen
          name="VocabularyMyWordList"
          component={VocabularyMyWordList}
        />
        <AppStack.Screen
          name="VocabularyFlashcards"
          component={VocabularyFlashcards}
        />
        <AppStack.Screen name="VocabularyQuiz" component={VocabularyQuiz} />
        <AppStack.Screen
          name="VocabularyQuizResult"
          component={VocabularyQuizResult}
        />
        <AppStack.Screen name="VocabularyGame" component={VocabularyGame} />
        <AppStack.Screen
          name="VocabularyWordOfDay"
          component={VocabularyWordOfDay}
        />
        <AppStack.Screen
          name="VocabularyPronunciation"
          component={VocabularyPronunciation}
        />
        <AppStack.Screen
          name="VocabularySpacedRepetition"
          component={VocabularySpacedRepetition}
        />
        <AppStack.Screen name="VocabularyTopic" component={VocabularyTopic} />
        <AppStack.Screen name="VocabularyDetail" component={VocabularyDetail} />
        <AppStack.Screen name="ReadingGrammar" component={ReadingGrammar} />
        <AppStack.Screen name="ReadingPart5" component={ReadingPart5} />
        <AppStack.Screen name="ReadingTips" component={ReadingTips} />
        <AppStack.Screen name="ReadingTipDetail" component={ReadingTipDetail} />
        <AppStack.Screen name="ReadingExercise" component={ReadingExercise} />
        <AppStack.Screen
          name="ReadingSkimScanPractice"
          component={ReadingSkimScanPractice}
        />
        <AppStack.Screen name="ReadingResult" component={ReadingResult} />
        <AppStack.Screen name="Grammar" component={Grammar} />
        <AppStack.Screen
          name="GrammarComparison"
          component={GrammarComparison}
        />
        <AppStack.Screen name="GrammarMistakes" component={GrammarMistakes} />
        <AppStack.Screen name="GrammarLessons" component={GrammarLessons} />
        <AppStack.Screen name="GrammarDetail" component={GrammarDetail} />
        <AppStack.Screen name="TestsMini" component={TestsMini} />
        <AppStack.Screen name="TestsFull" component={TestsFull} />
        <AppStack.Screen name="TestsInProgress" component={TestsInProgress} />
        <AppStack.Screen
          name="TestsResultSumary"
          component={TestsResultSumary}
        />
        <AppStack.Screen name="ProfileEdit" component={ProfileEdit} />
        <AppStack.Screen name="ProfileSettings" component={ProfileSettings} />
        <AppStack.Screen
          name="ProfileNotifications"
          component={ProfileNotifications}
        />
        <AppStack.Screen
          name="ProfileSubscription"
          component={ProfileSubscription}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      id="RootTabs"
      safeAreaInsets={{ bottom: 6 }}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: "#A47551",
        tabBarInactiveTintColor: "#6E6880",
        tabBarStyle: {
          height: 60,
          paddingBottom: 4,
          paddingTop: 6,
          backgroundColor: "#FFFFFF",
        },
        tabBarIcon: ({ color }) => {
          let iconUri = "";

          switch (route.name) {
            case "Home":
              iconUri =
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/fuhv8n2n_expires_30_days.png";
              break;
            case "ListeningTab":
              iconUri =
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/qw48xapq_expires_30_days.png";
              break;
            case "Reading":
              iconUri =
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/4z0gv4kg_expires_30_days.png";
              break;
            case "Tests":
              iconUri =
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/9lyh7oh0_expires_30_days.png";
              break;
            case "Profile":
              iconUri =
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3VY847oyGC/zu41fv7o_expires_30_days.png";
              break;
          }

          return (
            <Image
              source={{ uri: iconUri }}
              style={{ width: 20, height: 20, tintColor: color }}
            />
          );
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Home" }}
      />
      <Tab.Screen
        name="ListeningTab"
        component={ListeningStack}
        options={({ route }) => {
          const routeName =
            getFocusedRouteNameFromRoute(route) ?? "ListeningHome";
          const hideTabBar =
            routeName === "ListeningPart1" ||
            routeName === "ListeningPart11" ||
            routeName === "ListeningPart1Result" ||
            routeName === "ListeningPart2" ||
            routeName === "ListeningPart21" ||
            routeName === "ListeningPart2Result" ||
            routeName === "ListeningPart3" ||
            routeName === "ListeningPart31" ||
            routeName === "ListeningPart3Result" ||
            routeName === "ListeningDictation" ||

            routeName === "ListeningTips" ||
            routeName === "ListeningHistory" ||
            routeName === "AudioControl";

          return {
            title: "Listening",
            popToTopOnBlur: true,
            tabBarStyle: hideTabBar ? { display: "none" } : undefined,
          };
        }}
      />
      <Tab.Screen
        name="Reading"
        component={Reading}
        options={{ title: "Reading" }}
      />
      <Tab.Screen name="Tests" component={Tests} options={{ title: "Tests" }} />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ title: "Profile" }}
      />
    </Tab.Navigator>
  );
};

export default App;
