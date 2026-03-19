# AGENT

## Project

- Project: `crm-mvp`
- Goal: build a simple insurance CRM MVP for CS with:
  - consultation history
  - question input
  - AI answer panel

## Read First

작업 시작 전 아래 순서로 확인한다.

1. `MVP_PLAN.md`
2. latest file in `daily/`
3. `TASK_BOARD.md`
4. related detail docs:
   - UI: `UI_REFERENCE_PLAN.md`, `UI_REFERENCES.md`, `WIREFRAME.md`
   - AWS: `AWS_PLAN.md`
   - LLM: `LLM_PLAN.md`
   - Approval: `APPROVAL_LOG.md`

## Start-of-Day Routine

내일 포함, 작업 시작 전에 아래 순서로 반드시 확인한다.

1. `AGENT.md`
   - 프로젝트 목적, 작업 원칙, 오늘 확인 순서를 먼저 본다.
2. `MVP_PLAN.md`
   - 전체 진행 상태와 문서 구조를 확인한다.
3. latest file in `daily/`
   - 마지막 작업 내용, 결정사항, 리스크, 다음 작업을 확인한다.
4. `TASK_BOARD.md`
   - 현재 `To Do`, `In Progress`, `Done`, `Blocked` 상태를 확인한다.
5. 필요한 세부 문서 확인
   - UI 작업 시: `UI_REFERENCE_PLAN.md`, `UI_REFERENCES.md`, `WIREFRAME.md`
   - AWS 작업 시: `AWS_PLAN.md`
   - LLM 작업 시: `LLM_PLAN.md`
   - 승인 확인 시: `APPROVAL_LOG.md`
6. 작업 시작 전 오늘 할 일을 다시 정리한다.
7. 승인 필요한 작업이 있으면 먼저 `APPROVAL_LOG.md`에 기록 후 진행한다.

이 순서를 지키는 목적은 전날 작업과 연결된 상태로 바로 이어서 진행하기 위함이다.

## Working Rules

- AWS environment 기준으로 진행
- UI, AWS, LLM은 병렬 트랙으로 진행
- MVP 범위는 단순하게 유지
- 고객 목록, 고객 상세 등은 현재 제외
- 매일 작업 종료 시 Daily 파일 기록
- 다음날 시작 전 최신 Daily 확인

## Approval Rules

아래 작업은 승인 후 진행한다.

- AWS resource changes
- security group or firewall changes
- external package installation
- external API access
- IAM or permission changes

승인 내역은 `APPROVAL_LOG.md` 와 Daily에 남긴다.

## Main Files

- `MVP_PLAN.md`: main project plan
- `TASK_BOARD.md`: current task status
- `UI_REFERENCES.md`: UI research notes
- `WIREFRAME.md`: UI structure draft
- `AWS_PLAN.md`: AWS plan
- `LLM_PLAN.md`: LLM plan
- `APPROVAL_LOG.md`: approval history
- `DAILY_TEMPLATE.md`: daily template

## Daily Rule

- file format: `daily/YYYY-MM-DD.md`
- include:
  - Today Goal
  - Work Done
  - Decisions
  - Issues and Risks
  - Approval Needed
  - Next Actions

## Immediate Next Focus

1. finish GitHub upload
2. check AWS current environment
3. decide Mock vs real LLM API
4. refine UI references and wireframe
5. prepare MVP implementation
