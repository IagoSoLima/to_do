import React, { useState, useMemo } from "react";
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import logoImg from "../../assets/logo.png";
import clipboardIcon from "../../assets/icons/clipboard/icon.png";

import { styles } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import TaskCard from "../../components/Task";

type Task = {
  id: string;
  description: string;
  state: "pending" | "concluded";
};

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "asas",
      description:
        "Integer urna interdum massa libero auctor neque turpis turpis semper.",
      state: "pending",
    },
    {
      id: "1212",
      description:
        "Integer urna interdum massa libero auctor neque turpis turpis semper.",
      state: "pending",
    },
    {
      id: "2324",
      description:
        "Integer urna interdum massa libero auctor neque turpis turpis semper.",
      state: "concluded",
    },
  ]);

  const PENDING_TASK = (task: Task) => task.state === "pending";
  const COUNCLUDED_TASK = (task: Task) => task.state === "concluded";

  const counterTasksPending = useMemo(
    () => tasks.filter(PENDING_TASK).length,
    [tasks]
  );
  const counterTasksConcluded = useMemo(
    () => tasks.filter(COUNCLUDED_TASK).length,
    [tasks]
  );

  function headerListTask() {
    return (
      <View style={styles.headerList}>
        <View style={styles.headerList}>
          <Text style={{ ...styles.textInfoCount, ...styles.pendingCount }}>
            Criadas
          </Text>
          <View style={styles.countTaskContainer}>
            <Text style={styles.countTask}>{counterTasksPending}</Text>
          </View>
        </View>
        <View style={styles.headerList}>
          <Text style={{ ...styles.textInfoCount, ...styles.concludedCount }}>
            Concluídas
          </Text>
          <View style={styles.countTaskContainer}>
            <Text style={styles.countTask}>{counterTasksConcluded}</Text>
          </View>
        </View>
      </View>
    );
  }

  function emptyListTasks() {
    return (
      <View style={styles.emptyList}>
        <Image style={{ marginBottom: 16 }} source={clipboardIcon} />
        <Text style={{ ...styles.emptyText, ...styles.bold }}>
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.emptyText}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
      </View>
      <View style={styles.form}>
        <Input />
        <Button />
      </View>
      <FlatList
        style={styles.list}
        keyExtractor={(item) => item.id}
        data={tasks}
        ListHeaderComponent={headerListTask}
        ListEmptyComponent={emptyListTasks}
        renderItem={({ item }) => <TaskCard key={item.id} {...item} />}
      />
    </View>
  );
};

export default Home;
