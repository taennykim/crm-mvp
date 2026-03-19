# Approval Log

## 1. Purpose

- AWS, 네트워크, 권한, 외부 연동 등 승인 대상 작업을 기록한다.
- 어떤 승인으로 어떤 작업을 했는지 추적 가능하게 관리한다.

## 2. Approval Rules

- 승인 전에는 변경하지 않는다.
- 승인 범위는 최소화한다.
- 승인 목적과 작업 결과를 함께 남긴다.
- 작업 완료 후 Daily에도 반영한다.

## 3. Log Format

| Date | Area | Request | Reason | Status | Notes |
| --- | --- | --- | --- | --- | --- |
| 2026-03-19 | Pending | No approval requested yet | Initial planning stage | Open | |

## 4. Areas To Track

- AWS resource changes
- Security group or firewall changes
- External package installation
- External API access
- IAM or permission changes

## 5. Next Action

1. 실제 승인 요청이 발생하면 이 파일에 먼저 기록한다.
2. 승인 이후 작업 결과를 업데이트한다.
3. Daily 파일에도 연결해서 남긴다.
