-- Xóa bài test mẫu cũ (nếu có) để tránh trùng lặp
DELETE FROM public.toeic_tests WHERE title = 'Sample Mini Test 1';

DO $$
DECLARE
  v_test_id UUID;
  v_group_p1 UUID;
  v_group_p2 UUID;
  v_group_p3 UUID;
  v_group_p4 UUID;
  v_group_p5 UUID;
  v_group_p6 UUID;
  v_group_p7 UUID;
BEGIN
  -- 1. Tạo bài Test
  INSERT INTO public.toeic_tests (title, test_type, duration, is_published)
  VALUES ('Sample Mini Test 1', 'mini', 1800, TRUE)
  RETURNING id INTO v_test_id;

  -- ==========================================
  -- PART 1 (Photographs)
  -- ==========================================
  INSERT INTO public.toeic_question_groups (test_id, part_number, image_url, audio_url, order_index)
  VALUES (v_test_id, 1, 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/foldyAO6yE/p2a1s7wq_expires_30_days.png', 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', 1)
  RETURNING id INTO v_group_p1;

  INSERT INTO public.toeic_questions (group_id, question_number, question_text, options, correct_answer, explanation)
  VALUES (v_group_p1, 1, NULL, '["(A)", "(B)", "(C)", "(D)"]'::jsonb, 'A', 'A is correct because the man is looking at the screen.');

  -- ==========================================
  -- PART 2 (Question-Response)
  -- ==========================================
  INSERT INTO public.toeic_question_groups (test_id, part_number, audio_url, order_index)
  VALUES (v_test_id, 2, 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', 2)
  RETURNING id INTO v_group_p2;

  INSERT INTO public.toeic_questions (group_id, question_number, question_text, options, correct_answer, explanation)
  VALUES (v_group_p2, 2, NULL, '["(A)", "(B)", "(C)"]'::jsonb, 'B', 'B is the most logical response to the question.');

  -- ==========================================
  -- PART 3 (Conversations) - 3 questions
  -- ==========================================
  INSERT INTO public.toeic_question_groups (test_id, part_number, audio_url, order_index)
  VALUES (v_test_id, 3, 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', 3)
  RETURNING id INTO v_group_p3;

  INSERT INTO public.toeic_questions (group_id, question_number, question_text, options, correct_answer)
  VALUES 
    (v_group_p3, 3, 'Where does the conversation most likely take place?', '["A. At a hotel", "B. At an airport", "C. At a restaurant", "D. At a bank"]'::jsonb, 'A'),
    (v_group_p3, 4, 'What is the man asking for?', '["A. A room upgrade", "B. A menu", "C. A loan", "D. A boarding pass"]'::jsonb, 'A'),
    (v_group_p3, 5, 'What will the woman do next?', '["A. Check the system", "B. Serve food", "C. Call a manager", "D. Print a ticket"]'::jsonb, 'A');

  -- ==========================================
  -- PART 4 (Talks) - 3 questions
  -- ==========================================
  INSERT INTO public.toeic_question_groups (test_id, part_number, audio_url, order_index)
  VALUES (v_test_id, 4, 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', 4)
  RETURNING id INTO v_group_p4;

  INSERT INTO public.toeic_questions (group_id, question_number, question_text, options, correct_answer)
  VALUES 
    (v_group_p4, 6, 'Who is the speaker?', '["A. A tour guide", "B. A pilot", "C. A CEO", "D. A store manager"]'::jsonb, 'A'),
    (v_group_p4, 7, 'What is the main topic of the talk?', '["A. Upcoming safety regulations", "B. A new product launch", "C. A historical building", "D. Financial results"]'::jsonb, 'C'),
    (v_group_p4, 8, 'What should the listeners do?', '["A. Take pictures", "B. Ask questions at the end", "C. Sign a form", "D. Turn off phones"]'::jsonb, 'B');

  -- ==========================================
  -- PART 5 (Incomplete Sentences)
  -- ==========================================
  INSERT INTO public.toeic_question_groups (test_id, part_number, passage_text, order_index)
  VALUES (v_test_id, 5, 'The new software update will be available to all employees _______ Friday.', 5)
  RETURNING id INTO v_group_p5;

  INSERT INTO public.toeic_questions (group_id, question_number, question_text, options, correct_answer, explanation)
  VALUES (v_group_p5, 9, NULL, '["A. by", "B. in", "C. at", "D. of"]'::jsonb, 'A', '''By Friday'' means no later than Friday.');

  -- ==========================================
  -- PART 6 (Text Completion) - 4 questions
  -- ==========================================
  INSERT INTO public.toeic_question_groups (test_id, part_number, passage_text, order_index)
  VALUES (v_test_id, 6, 'Dear Mr. Smith,\n\nWe are pleased to inform you that your application has been (10)_______. Please come to our office on Monday to sign the contract. (11)_______. We look forward to working with you.\n\nSincerely,\nHR Department', 6)
  RETURNING id INTO v_group_p6;

  INSERT INTO public.toeic_questions (group_id, question_number, question_text, options, correct_answer)
  VALUES 
    (v_group_p6, 10, NULL, '["A. rejected", "B. accepted", "C. delayed", "D. forgotten"]'::jsonb, 'B'),
    (v_group_p6, 11, NULL, '["A. Bring your ID.", "B. We are closed on Monday.", "C. The position is filled.", "D. Please reply to this email."] '::jsonb, 'A');

  -- ==========================================
  -- PART 7 (Reading Comprehension) - 2 questions
  -- ==========================================
  INSERT INTO public.toeic_question_groups (test_id, part_number, passage_text, order_index)
  VALUES (v_test_id, 7, '**NOTICE TO ALL STAFF**\n\nThe cafeteria will be closed for renovations starting from June 1st to June 15th. During this time, a temporary food truck will be parked outside the main entrance from 11:00 AM to 2:00 PM.', 7)
  RETURNING id INTO v_group_p7;

  INSERT INTO public.toeic_questions (group_id, question_number, question_text, options, correct_answer)
  VALUES 
    (v_group_p7, 12, 'Why will the cafeteria be closed?', '["A. Staff shortage", "B. Renovations", "C. Holiday", "D. Health inspection"]'::jsonb, 'B'),
    (v_group_p7, 13, 'Where can staff get food during the closure?', '["A. At a nearby restaurant", "B. From a food truck", "C. In the breakroom", "D. They must bring their own"]'::jsonb, 'B');

END $$;
