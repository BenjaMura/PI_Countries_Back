import { describe, it, expect } from "vitest";
import { conn as sequelize, Activity } from "../../db";

describe("Activity model", () => {
  it("should create an activity with valid fields", async () => {
    const activityData = {
      name: "Hiking",
      difficulty: 3,
      duration: 2,
      season: "Summer",
    };

    // const activity = await Activity.create(activityData);

    expect(activity.name).toBe(activityData.name);
    expect(activity.difficulty).toBe(activityData.difficulty);
    expect(activity.duration).toBe(activityData.duration);
    expect(activity.season).toBe(activityData.season);
  });

  it("should fail to create an activity with invalid fields", async () => {
    const invalidActivityData = {
      name: "Running",
      difficulty: 10,
      duration: -1,
      season: "Summer",
    };
    let errorOccurred = false;
    try {
      await Activity.create(invalidActivityData);
    } catch (error) {
      expect(error).toBeInstanceOf(sequelize.Sequelize.ValidationError);
      errorOccurred = true;
    }
    expect(errorOccurred).toBe(true);
  });
});